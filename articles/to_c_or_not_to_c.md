
In the past few years, it seems that, as retro gaming has grown in popularity, programming for older platforms has also gained traction. A popular platform is the Game Boy, both for its nostalgia and (relative) ease to program for.

**Important: this document only applies to the Game Boy and Game Boy Color. Game Boy Advance programming has nothing in common with Game Boy programming.** If you want to program for the GBA, which is much more C-friendly (and C++ and Rust, for that matter) than the GB and GBC, then I advise you download devkitARM and follow the [Tonc](https://www.coranac.com/tonc/text/) tutorial. Please note that the Game Boy Advance also functions as a Game Boy Color, so if you only have a GBA, you can use it for both GB and GBC development.

When someone wants to make their own game, one of the first problems they will encounter is picking the *tools* they will use. There are two main options: either use GBDK (Game Boy Development Kit) and the language C, or RGBDS (Rednex Game Boy Development System) and the Game Boy's assembly language.

The purpose of this document is to provide my insights and experience, and help you make the better choice if you're starting a new project. I will also provide some "good practice" tips, both for C and ASM, if you have already made up your mind or are already using one of these.



# Overview

The original Game Boy, codenamed the DMG, has a 1 MHz CPU \[the CPU is actually clocked at 4 MHz, but every instruction takes up a multiple of 4 clocks, so it's often simplified to a 1 MHz CPU\]. Given that an instruction takes approximately 2 to 3 cycles, this gives the CPU a capacity of 333,000~500,000 instructions per second.
Its LCD boasts 60 fps \[it's actually 59.73 fps\], which rounds up to between 50,000 and 80,000 instructions per frame. Suddenly not so much, eh?
It also has 8 kB of RAM, and 8 kB of video RAM ; a 160x144 px LCD (thus slightly wider than it's tall), 4 colors, and 4-channel audio.

The Super Game Boy adds a few minor things, such as a customizable screen border, and some crude color. It's also slightly faster than the DMG.

The Game Boy Color *can* \[if you tell it to\] unlock additional functionality, such as more fleshed-out color, a double-speed CPU, twice the video RAM and *four times* the RAM! (With caveats, obviously.)


# Development Tools

* [GBDK](http://gbdk.sourceforge.net) is a development suite, built around the SDCC compiler, which allows you to write C code for the Game Boy, including functions that allow interfacing with the Game Boy without worrying too much about the details. GBDK is currently available only for Windows.

* [RGBDS](http://github.com/rednex/rgbds) is an actively maintained quatuor of programs that allow building a ROM using ASM (assembly). It contains three programs that perform different stages of the compilation, as well as a program that converts PNG images to the Game Boy's tile format. RGBDS is available for Linux, Windows and Mac.

* [WLA-DX](https://github.com/vhelin/wla-dx) is also sometimes used, mostly due to its better struct support than RGBDS.


To run and debug the final product, an emulator is most often used.

* [BGB](http://bgb.bircd.org) is perfect for the task thanks to its near-perfect accuracy and very convenient debugger. Its UI tends to be confusing at first, though. BGB is available for Windows only, but runs almost flawlessly with Wine.

* [Gambatte](http://github.com/sinamas/gambatte) has a near-perfect accuracy, on par with BGB's, although subtly different. It lacks a debugger and must be compiled from source, but is packaged both in [RetroArch](http://retroarch.com) (Linux, Windows and Mac) and [BizHawk](http://tasvideos.org/BizHawk.html) (Windows-only).

Purists prefer to also run their games on hardware, which is possible thanks to flashcarts. My personal recommendation is [krikzz's carts](http://krikzz.com/store/), particularly the [Everdrive GB X5](https://krikzz.com/store/home/47-everdrive-gb.html).


Side note : if you are using VBA or VBA-rr, **stop using them right now**. These emulators are extremely inaccurate, and also contain **severe security flaws**. I strongly urge you to ditch these emulators and spread the word.


# Picking A Language

The choice of platform to run the ROM on doesn't matter much, but the language is extremely important.

ASM is a good choice, since it's not too difficult to learn, is extremely powerful and flexible, and RGBDS is a good tool, which further works quite well with BGB for debugging. Its two largest issues are that it takes a special kind of work to write optimized ASM code, and that it's quite verbose and sometimes tedious.

C is a much more complicated matter, discussed below.


# C's Problems

C's problems can be separated into a few that are inherent to the language, and a lot more that come from GBDK.

## The Language

C is a compiled language, meaning the C code is translated into ASM code, which is then turned into the ROM. The problem is that due to the way C is defined, it is often substantially slower than hand-written ASM. On modern computers clocking at a few GHz with multithreading, memory caches etc., this additional overhead is negligible. On the Game Boy, it's much more apparent (the green bar represents the CPU's load) :

With C :

![Game in C](https://media.giphy.com/media/26hirMERbslnl0I2A/giphy.gif)

With ASM :

![Game in ASM](https://media.giphy.com/media/l0MYM229WAV40G7XG/giphy.gif)

[Source: screenshots of Last Crown Warriors, by Imanolea, found on his blog Imanolea's Games](https://imanoleasgames.blogspot.fr/2016/09/games-aside-0-ensamblador-en-game-boy.html)

The overhead is also due to C being a stack-oriented language \[if you don't know what that means, ignore this paragraph\], whereas the Game Boy's CPU is rather built for a register-oriented strategy. This most notably makes passing function arguments a lot slower.

Another problem is that you lose advanced debugging; BGB allows for precise debugging, but only debugs the compiled ASM (unlike `gdb`, for example). Thus, all debugging will have to be done without this very helpful tool.


Overall, using C on the Game Boy is significantly slower than ASM. But let's not be unjust here: Most of the overhead isn't actually the language's fault.


## GBDK

GBDK is... poorly written, to say the least. I'm going to list some of its major problems; the goal isn't to discourage anyone to use GBDK, but to make you realize its weaknesses and limits.

It's built on an ancient build of SDCC, which is known to generate poor (bloated) and often straight up wrong code. Two examples that come to mind are when compiled code moved the stack to an absurd location \[if you are interested, it ran a `add sp, $7D` with `sp` = `$DFA?`, and ended up at `$E02?`\]; the other example is if you try to multiply by a power of 2, say, `8`. The compiler will helpfully optimize that to a bitshift (because `* 2^n` is the same as `<< n`)... but shift by one too much, and in our case, multiply by `16`!

A very nasty issue with GBDK is that the library it provides is not explicit at all as to what a given function does. First, this makes a lot of questions people ask us redundant, when they could simply be solved by knowing how the Game Boy works. Second, when a bug pops up, people are confused about its origin: what's wrong, their code, their usage of the library, the library itself (it happens), or the Game Boy (it has hardware bugs)?

Further, the library is fairly constraining, for example forcing the way tiles are allocated in VRAM.

Also, it's totally possible for anyone to write awful code without even realizing it. A simple reason is that the Game Boy's CPU is only capable of performing 8-bit addition or subtraction, or 16-bit addition. I think you'll have figured out that using `INT32`s must be quite taxing on the CPU (it needs to do two consecutive 16-bit adds, and add the carry). This is the reason why I'm providing some tips below, to avoid such blunders.

And finally, banking. Banking in GBDK is very unintuitive, as far as I have seen it in action. Tutorials don't seem to help a lot, either.


# Summary

If your question is "*What should I use for my game project ?*", then you're in the right section.

The first question you should ask yourself is what languages you know. If you have never worked with ASM, C or C++, you should start by learning C. This will introduce to how you interface with the hardware when you're close to it (pointers, above all)., If you grasped C's concepts (most importantly pointers), give ASM a go. Even if you don't manage to get working ASM code, it actually helps a lot (especially on such a constrained system) to know what's "under the hood". Especially with GBDK's crappy lib, it's particularly useful to use ASM-level debugging tools to figure what exactly is wrong.

Now, I'll be assuming you know at least C. If you are okay with ASM, I recommend going with that. It will cut a lot of the hassle GBDK may generate.

The third question to ask is the size of your project. Due to the issues with banking, I wouldn't recommend GBDK if your project is going to be large enough that banking is required, also because of the performance issue, since your project might end up being too large for the CPU, too.

If you haven't decided yet, you should consider giving ASM a try; the language is simpler than it looks. Even if you just end up writing a few functions then switching to C, you will have learned something. If you don't want to learn ASM, that's okay, too.


Another option is to [reach out to us](#community-and-help), and discuss the matter. 


## Alternatives To GBDK

[GBDK-n](https://github.com/andreasjhkarlsson/gbdk-n) brings GBDK to newer SDCC versions, which produce much better code. This eliminates part of the performance problem, but keeps all library-related issues. It is (at the time of writing this) lacking banking support. If you intend to do a small project (in size, such as [Flappy Boy](https://github.com/bitnenfer/flappy-boy-asm) or [gb-mines](https://github.com/andreasjhkarlsson/gb-mines)), then GBDK-n is certainly a good choice.

Below is the "experimental zone"; ie. projects that aren't finished yet, but that may provide significant alternatives once they will be completed.

[Dovuro / DonaldHays](https://github.com/DonaldHays) has built a barebones custom toolchain and library for his game [Event Aurora](https://github.com/DonaldHays/event-aurora). A project is to flesh out this lib into a GBDK equivalent.

[Bevinsky](https://github.com/Bevinsky) is attempting to make a GBz80 backend for LLVM. tl;dr: this would allow to use `clang` to make code for the Game Boy. If this succeeds, then a new library could be built around it, to remove the problems that GBDK's libs cause.<br/>EDIT: The backend is working, although only a few features of C are implemented (functions aren't :p). The project is on the right tracks!


# Tips For Better Code

The *very first thing* to do **in all cases** is to [read the docs](http://gbdev.gg8.se/wiki/articles/Pan_Docs), to grasp how the Game Boy works. In ASM, this is essential; in C, this will let you understand what a given library function does. It will also let you understand what is possible on the Game Boy, and what isn't. (You can always ask, if you have doubts.)

I also recommend looking up [awesome-gbdev](http://github.com/avivace/awesome-gbdev) for resources and tutorials. There are a lot of helpful articles there, as well as helper tools.


## ASM Help

- *Modules*<br>
  Separate your game into several "entities" that interact together. Camera, Player, NPCs, Loading zones, etc. This simplifies coding, by allowing you to reason independently on smaller units. This facilitates development and reduces the amount of bugs.
- *Document your functions*<br>
  For each function, write a comment saying what it does, what memory it touches, and what registers it affects. This will avoid conflicts, and let you optimize your code by minimizing the amount of registers you save when calling a function.
- *Plan before writing*<br>
  You should plan what register is going to be used for what within your functions *before starting to write them*. Your goal is to minimize the amount of register swapping. There's no general rule, so feel free to drop by and ask us, if you're in doubt.
- *RGBASM `-E` and RGBLINK `-n <symfile>`*<br>
  When you load `ROM.gb` or `ROM.gbc` in BGB, it automatically loads (if it exists) the file `ROM.sym` in the same folder as the ROM. This adds symbols to the debugger, which - believe me - helps *a ton*.


## Optimizing For GBDK

- *Global variables*<br>
  Use as many global variables as you can; the Game Boy has a lot of RAM, but is slow at using the stack. Thus, minimizing the number of local variables, especially in heavily-called functions, will reduce the time spent manipulating the stack.
- *Inlining*<br>
  Avoid using functions if you can inline them, which skips passing all arguments to the stack, mostly. Macros will be your friends there.
- **NEVER use recursive functions**<br>
  As with the two previous tips, this comes from GBDK/SDCC's horrible and slow stack usage.
- **NEVER use printf**<br>
  `printf` clobbers a sizeable chunk of VRAM with unnecessary text tiles (unless you absolutely need hebrew in your game, I s'pose?). Instead, you should `sprintf` to a buffer in WRAM, then put that on the screen. Bonus: this lets you use a custom font!
- *Optimized code*<br>
  SDCC doesn't seem to have optimization passes, so you should write code as efficient as possible. There will be a readability tradeoff after some point, so I recommend you get the comment machine gun out and put some everywhere.
- *Geometry funcs*<br>
  Avoid the functions that draw geometry on-screen (lines, rectangles, etc.). The Game Boy isn't designed for this kind of drawing method, and you will have a hard time mixing this with, say, background art. Plus, the functions are super slow.
- `const` (very important!)<br>
  Declaring something as `const` **severely** reduces its size in the ROM, RAM usage, and CPU usage.<br>
  The technical reason behind that is that non-`const` values, *especially* arrays, are loaded to RAM from ROM in an *extremely* inefficient way. This takes up a LOT more ROM, and copies the value(s) to RAM when it's unneeded. (And the GB has very little RAM.)
- *Don't use MBC1*<br>
  MBC1 is often assumed to be the simplest of all MBCs... but it has a quirk that adds some overhead every time ROM or SRAM bank switches are performed. MBC3 and MBC5 don't have this quirk, and don't add any complexity. Using MBC1 has no real use. (Let's not talk about MBC2, either.)<br>
  If you're looking for a cart release, it's better to avoid using a MBC at all. The cheapest carts (Catskull's) come without a MBC.


# Community And Help

If you want to get help from the community, go:
- to the historical IRC channel, #gbdev on [EFNet](http://efnet.net) \[if you don't have an IRC client, you can use the "Webchat login" box, just enter a username\],
- to the more recent [Discord server](https://discord.gg/gpBxq85),
- and to the [GBDev forums](http://gbdev.gg8.se/forums)!


<hr>

Written by [ISSOtm](https://github.com/ISSOtm/) with help from [tobiasvl](https://github.com/tobiasvl). Originally at https://gist.github.com/ISSOtm/4f4d335c3fd258ad0dfc7d4d615409fd

I'm an active member of the GBDev community, which I joined about half a year ago. While that may seem small, my experience as a developer (check out my project, [Aevilia](https://github.com/ISSOtm/Aevilia-GB/)) and as a moderator of the Discord server, has allowed me to interact with RGBDS and GBDK users alike.

Hopefully reading this was useful to you!
