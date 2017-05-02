# DMA Hijacking
Article by [ISSOtm](https://github.com/ISSOtm/gbz80-to-items).

## What is this ?
It's a simple technique that allows you to run custom code in most GB/SGB/CGB games, provided you have an ACE exploit.

What's the point, then? It's that code ran through DMA Hijacking will be run on every game frame (for most games, at least).

## How is it done ?
If you are familiar enough with OAM, you know about that feature called *OAM DMA* that requires a small routine to be ran in HRAM ?

Well, most games copy the routine when starting up and run it on every frame. I encountered some games which don't transfer OAM unless a specific flag is set ; I believe that it is always possible to override this limitation. more on that later.

But if the routine is modified while the game is running - assuming you modify it fully in-between to VBlanks to prevent a crash, or you temporarily put a RET while modifying - then the game will happily run your custom routine.

Here is the standard routine, given by Nintendo in the GB programming manual :
```
ld a, OAMBuffer >> 8
ldh [$FF46], a
ld a, $28
DMALoop:
dec a
jr nz, DMALoop
ret
```

It's usually placed right at `$FF80`, but this isn't true for every game.
Now, overwriting the routine to place custom code would yield us 10 bytes to perform custom operations, at the cost of sprites.
But we can do better.

```
call DMAHook
ldh [$FF00+c], a
ld a, $28
DMALoop:
dec a
jr nz, DMALoop
ret
```

Allows us to make the perfect compromise !
Here is a pattern for DMAHook :

```
DMAHook:
[ custom code, do whatever you want, it's VBlank time ! ]
ld c, $46
ld a, OAMBuffer >> 8
ret
```

DMAHook can be anywhere (in WRAM, mostly). It will be executed in the context of the VBlank interrupt, so for most games interrupts will be disabled, etc.
An alert reader will notice the new DMA handler modifies C (whereas the original simply zeroes A). I don't know any game whose behavior is altered by this.

DMA hijacking is also useful when combined with [cartswap](https://gist.github.com/ISSOtm/3008fd73ec66cb56f1caecfcc8b6fb6f) (swapping carts without shutting the console down, concept found by furrtek, developed by Cryo and me on the GCL forums), because it allows porting ACE to other games.

General procedure :

- Acquire ACE in the donor game
- Perform cartswap, insert the recipient game
- Pseudo-initialize the recipient (clear enough memory to avoid crashing, while keeping our custom code in an unused region of memory we don't clear)
- Place the modified DMA handler in HRAM
- Transfer control back to the recipient's ROM
- ????
- Profit.

[Video demonstration, performed by Torchickens/ChickasaurusGL in BGB](http://youtu.be/BNyDmZlbsNI)

Possible applications are checking for a button combo to trigger specific code (for example, credits warp), checking one or multiple memory addresses to detect a certain game state, etc.

Possible "attack vectors", ie ways of affecting the recipient game, are setting certain memory addresses (like GameShark), or even better : manipulating the stack.

Manipulating the stack with this technique can not crash if the triggering game state is specific enough. I achieved text pointer manipulation in Pokémon Red this way.


### Details
Here are some details on how to combine DMA hijacking and cartswap to pwn any game.

First thing you will need is to find some RAM to store the DMA hook code. We'll call it "HookRAM". I recommend checking how much memory is allocated to the stack.

Then :
- Clear as much RAM as needed for the game to run properly
- Copy the DMA hook code to HookRAM
- Copy the hijacked DMA routine to HRAM
- Emulate all game initialization up to right before DMA routine copy / HookRAM clearing
- Jump back to ROM


## Trivia
DMA hijacking works similarly to the GameShark : it detected when the GB tried reading from the VBlank interrupt vector, and responded with instructions that applied the codes.

And yep, it is possible to use DMA hijacking to emulate GameShark codes. I have a PoC in Pokémon Red (a BGB save state), if anyone's interested.
