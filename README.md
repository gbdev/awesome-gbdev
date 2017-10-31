# Awesome Game Boy Development [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](#awesome-gbdev)

#### [![GameboyIcon](http://i.imgur.com/ROUq7NT.gif) Join us on Discord](https://discord.gg/gpBxq85)

A curated list of awesome Game Boy (Color) Development resources, tools, docs, related projects and open-source ROMs. Inspired by the [awesome](https://github.com/sindresorhus/awesome) list thing.

## Contents

- [Intro](#intro)
  + [Disambiguation](#disambiguation)
- [Community](#community)
- [Documentation](#documentation)
  - [Peripherals](#peripherals)
  - [Cartridges](#cartridges)
- [Emulator Development](#emulator-development)
  - [Open-Source emulators](#open-source-emulators)
- [Software Development](#software-development)
  - [Assemblers](#assemblers)
  - [Compilers](#compilers)
  - [Emulators](#emulators)
  - [Tools](#tools)
- [Programming Tutorials](#programming-tutorials)
  - [ASM](#asm)
    + [Glitches and exploits](#glitches-and-exploits)
    + [Timings](#timings)
  - [C](#c)
  - [Old articles](#old-articles)
- [Open-Source Games](#games)
  - [ASM](#asm-1)
  - [C](#c-1)
- [ROMs Disassembly](#roms-disassembly)
- [Related sites, posts and projects](#related-sites-posts-and-projects)
- [About this project](#about)
  - [Contribute](#contribute)
  - [License](#license)
  - [Special Thanks](#special-thanks)

## Intro
- [The Game Boy, a hardware autopsy](https://www.youtube.com/playlist?list=PLu3xpmdUP-GRDp8tknpXC_Y4RUQtMMqEu).
- [The Ultimate Game Boy Talk](https://media.ccc.de/v/33c3-8029-the_ultimate_game_boy_talk).
- [Emulation of Nintendo Game Boy](https://github.com/Baekalfen/PyBoy/blob/master/PyBoy.pdf) - Overview of the Game Boy hardware with the perspective of building an emulator.

#### Disambiguation

Although this documentation is focused on the original (1989) Game Boy (DMG), the *Game Boy Color* (GBC) and *Super Game Boy* (SGB) are very similar systems, with few important distinctions, such as:

- Different hardware specifications
- Specific hardware and software features
- Specific registers
- Specific bugs and exploitable behaviours

If you aim to develop your software for SGB or GBC, or you want to know how it runs on the others system, you may want to take advantage and adapt to these differences, check for specific references to GBC/CGB and SGB in the documentation section.

## Community
- [gbdev Discord Server](https://discord.gg/gpBxq85)
- [#gbdev on EFnet](http://chat.efnet.org/?channels=gbdev) - IRC channel.
- [gbdev.gg8.se](http://gbdev.gg8.se) - This is basically the home of the gbdev scene. The [wiki](http://gbdev.gg8.se/wiki/articles/Main_Page) has a lot of articles from previous sites, tutorials and other documents about a lot of topics.
- [devrs.com/gb](http://devrs.com/gb) - Jeff Frohwein’s page, this the main reference for everything. Almost everything is archived here: code examples and working programs(ASM and C), complete documentation and various tools.


## Documentation
- [Game Boy Programming Manual](http://www.chrisantonellis.com/files/gameboy/gb-programming-manual.pdf) - **Official Game Boy** programming & hardware manual by Nintendo. Pretty much everything in the console is covered and explained in this manual. This should be your first and main resource to start understanding what game boy is.
- [The Cycle-Accurate Game Boy Docs](https://github.com/AntonioND/giibiiadvance/blob/master/docs/TCAGBD.pdf) - A precise documentation by AntonioND to make a cycle-accurate Game Boy emulator.
- [Game Boy: Complete Technical Reference](https://gekkio.fi/files/gb-docs/gbctr.pdf)
- [Pan Docs](http://bgb.bircd.org/pandocs.htm) - The single most comprehensive technical reference to Game Boy that is available to the public.
- [Game Boy hardware database](https://gbhwdb.gekkio.fi/) - Data and photos of various types of Game Boy consoles.
- [Everything You Always Wanted To Know About GAME BOY](http://www.emulatronia.com/doctec/consolas/gameboy/gameboy.txt) - but were afraid to ask
- [GBSOUND.txt](https://github.com/bwhitman/pushpin/blob/master/src/gbsound.txt) - A document detailing the Game Boy sound engine.
- [DMG Schematics](http://gbdev.gg8.se/wiki/articles/DMG_Schematics) - Hardware schematics.
- [GB Instructions](http://www.chrisantonellis.com/files/gameboy/gb-instructions.txt) Game Boy Assembly commands.
- [GB ASM Tips](http://www.chrisantonellis.com/files/gameboy/gb-asm-tips.txt) - Some tips for coding in Assembly by Jeff Frohwein.
- [ASMotor Manual](http://www.chrisantonellis.com/files/gameboy/asmotor-v0.1.0-manual.pdf) - A reference for rgbds.
- [ASMotor v1.10 documentation](http://otakunozoku.com/RGBDSdocs/)
- [wla-dx documentation](http://www.villehelin.com/wla.txt) - WLA DX Macro Assembler Package manual.
- [GBDK libraries documentation](http://gbdk.sourceforge.net/doc/gbdk-doc.pdf)
- [gbdev FAQs](http://www.devrs.com/gb/files/faqs.html) - Must read by Jeff Frohwein.
- [Game Boy CPU InstructionSet Sheet (GCISheet)](http://www.devrs.com/gb/files/GBCPU_Instr.html) - Cheatsheet for the available Instruction Set.
- [Opcode table](http://goldencrystal.free.fr/GBZ80Opcodes.pdf)
- [Opcode table with timings and flags](http://www.devrs.com/gb/files/opcodes.html)
- [Game Boy CPU Manual](http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf) - Assembly language commands, timings and opcodes.
- [OP Codes cheatsheet](http://pastraiser.com/cpu/gameboy/gameboy_opcodes.html)
- [rednex gbz80 opcode reference](https://rednex.github.io/rgbds/gbz80.7.html)
- [Assembly Language Programming Course](http://cratel.wichita.edu/cratel/ECE238Spr08) - Machine and assembly language programming concepts that illustrate basic principles and techniques. Application through study of the Z80 chip and Game Boy programming assignments (Center for Research in Arts, Technology, Education, and Learning CRATEL at Withicha State University).
- [Game Boy Bootrom](http://www.neviksti.com/DMG/DMG_ROM.asm) - Commented dump of the DMG bootrom.
- [GB Technical Information](http://fms.komkon.org/GameBoy/Tech/) - Some old code resources.
- [Differences between the Z80 and the gameboy's processor](http://www.z80.info/z80gboy.txt)
- [Archive of related files](http://gbdev.gg8.se/files/)
- [fruttenboel](http://verhoeven272.nl/fruttenboel/Gameboy/index.html) - Page with loads of information on the actual hardware, custom boards to interface with the console and other related projects.
- [Gameboy 2BPP Graphics Format](http://www.huderlem.com/demos/gameboy2bpp.html) - Information on how the Gameboy interprets VRAM tile data to color pixels.

### Peripherals
- [Game Boy Camera RE](https://github.com/AntonioND/gbcam-rev-engineer) - Documentation about GB Camera and tools used to reverse engineer it by using Arduino UNO.
- [Creating photorealistic images with neural networks and a Gameboy Camera](http://www.pinchofintelligence.com/photorealistic-neural-network-gameboy/)
- [The Game Boy Printer](https://shonumi.github.io/articles/art2.html) - An in-depth technical document about the printer hardware, the communication protocol and the usual routine that games used for implementing the print feature.
- [Ben Heck Reverse Engineers Game Boy Printer](https://www.youtube.com/watch?v=43FfJvd-YP4)
- [Mobile Game Boy Adapter](https://bulbapedia.bulbagarden.net/wiki/Mobile_Game_Boy_Adapter)
- [GB KISS LINK MODEM](http://nectaris.tg-16.com/GB-KISS-LINK-FAQ-hudson-gameboy-nectaris.html)

### Cartridges
- [AntonioND's docs](https://github.com/AntonioND/giibiiadvance/tree/master/docs) - Corrected schematics and infos on cartridge header data
- [Gekkio's Game Boy cartridge types](http://gekkio.fi/blog/2015-02-14-mooneye-gb-gameboy-cartridge-types.html) - An overview on existing cartridge types.
- [Gekkio](http://gekkio.fi/blog/)'s cartridge analysis - [DMG-BEAN-02](http://gekkio.fi/blog/2015-05-18-mooneye-gb-cartridge-analysis-dmg-bean-02.html), [MBC1](http://gekkio.fi/blog/2015-05-17-mooneye-gb-cartridge-analysis-fortress-of-fear.html), [no MBC](http://gekkio.fi/blog/2015-02-28-mooneye-gb-cartridge-analysis-tetris.html)
- [Game Boy Cartridges Schematics](http://www.devrs.com/gb/files/gb.html) - Schematics for MBC2 and MBC3 types.
- [Cartridges PCB photos](https://imgur.com/a/D5bpC)
- [Reiner Ziegler's Game Boy page](http://www.reinerziegler.de/readplus.htm) - Commercial and homemade programmable cartridges and programming systems. Tutorials, wiring and schematics provided.
- [MBC1+Ram+Battery cartridge Schematic](http://www.devrs.com/gb/files/mbc1.gif) - First schematics by Jeff Frohwein.
- [MBC1 and MBC2 cartridges circuits](http://fms.komkon.org/GameBoy/Tech/Carts.html) and explanation on how these MBC actually bank switch and control RAM.
- [GB Rom List](https://docs.google.com/spreadsheets/d/1cOS__xEj8bBT7cqEDgJcYStKuFAS8mMA4uErx9kA40M/edit?usp=sharing) - Navigable table of every GB game released with details on their cartridges.
- [Game Boy cartridge PCB photos](http://gekkio.fi/blog/2016-03-19-game-boy-cartridge-pcb-photos.html)
- [Emulating a GameBoy Cartridge](https://dhole.github.io/post/gameboy_cartridge_emu_1/) - Emulating the functionality of a Game Boy cartridge with the development board STM32F4.
- [Wolf](http://www.happydaze.se/wolf/) - Gameboy cartridge with co-processor.

## Emulator Development

- [Blargg's test roms](http://gbdev.gg8.se/files/roms/blargg-gb-tests/)
- [Gekkio's test roms](https://gekkio.fi/files/mooneye-gb/latest/)
- [Building a Game Boy emulator in JavaScript](http://imrannazar.com/gameboy-Emulation-in-JavaScript) - Step by step tutorial.
- [Writing a Game Boy emulator, Cinoop](https://cturt.github.io/cinoop.html)
- [RealBoy Emulator](https://realboyemulator.wordpress.com/posts/) - A series of posts about the design and implementation of the RealBoy Emulator
- [Codeslinger](http://www.codeslinger.co.uk/pages/projects/gameboy.html) - Another series of posts documenting the building of an emulator.


### Open-source emulators
- [Mooneye-gb](https://github.com/Gekkio/mooneye-gb) -  A Game Boy research project and emulator written in Rust.
- [jsGB](https://github.com/Two9A/jsGB) - Javascript.
- [php-terminal-Game Boy-emulator](https://github.com/gabrielrcouto/php-terminal-gameboy-emulator) - PHP Terminal
- [gameboy-Online](https://github.com/taisel/gameboy-Online) - Javascript, HTML5 canvas and JavaScript audio APIs.
- [cboy](https://github.com/jkbenaim/cboy) - C. Mac OS X and Linux.
- [weplay](https://github.com/rauchg/weplay) - Collaborative Game Boy emulation powered by JavaScript.
- [giibiiadvance](https://github.com/AntonioND/giibiiadvance) -  A GB, GBC emulator with GB Camera support. Written in C.
- [GBE+](https://github.com/shonumi/gbe-plus) - Built in C++ and SDL. Focused on enhancements.
- [Sameboy](https://github.com/LIJI32/SameBoy) - Portable C.
- [GameYob](https://github.com/Drenn1/GameYob) - Emulator for Nintendo (3)DS.
- [oneup-gb](https://github.com/oneup40/oneup-gb) - C++ DMG. Currently provides SDL frontend and Retroarch integration.
- [rustboy](https://github.com/VelocityRa/rustboy) - A basic DMG emulator written in Rust, using the Piston engine for window creation and graphics.
- [Gearboy](https://github.com/drhelius/Gearboy) - C++. iOS, Raspberry Pi, Mac, Windows and Linux.
- [AndroidGameBoyEmulator](https://github.com/pedrovgs/AndroidGameBoyEmulator)
- [GameLad](https://github.com/Dooskington/GameLad) - C++/SDL almost fully featured emulator.
- [Wadatsumi](https://github.com/arrow-lang/wadatsumi) - Arrow.
- [Binjgb](https://github.com/binji/binjgb) - 5kloc emulator in C that passes most of the tests.
- [jgilchrist](https://github.com/jgilchrist/emulator) - Modern C++.
- [gameboyGO](https://github.com/gonccalo/gameboyGO) - Go.
- [GameBoyEmulator-GBS](https://github.com/Salgat/GameBoyEmulator-GBS) - C++ 14 with a single library dependency of SFML.
- [PyBoy](https://github.com/Baekalfen/PyBoy) - Python. Mac, Linux and Windows.
- [scimitar](https://github.com/tompko/scimitar) - Rust.
- [FunGBC](https://github.com/andreasjhkarlsson/fungbc) - F#.
- [barnacleboy](https://github.com/rep-nop/barnacleboy) - Rust.


## Software Development

### Assemblers
- [rgbds](https://github.com/rednex/rgbds) - Assembler and linker package (a fork currently updated).
- [wla-dx](https://github.com/vhelin/wla-dx) - Yet Another GB-Z80/Z80/.. Multi Platform Cross Assembler Package.
- [gbasm](https://github.com/BonsaiDen/gbasm) - A JavaScript based compiler for Gameboy z80 assembly code.
- [tniASM](http://www.tni.nl/products/tniasm.html) - Macro Assembler.
- [Assembler](https://github.com/ulrikdamm/Assembler) - Assembler written in Swift.

### Compilers
- [The Game Boy Developer's Kit (GBDK)](http://gbdk.sourceforge.net/) - A set of tools that enable to develop programs for the Nintendo Game Boy system in **C**. Includes a set of libraries for the most common requirements and generates image files for use with a real Game Boy.
- [gbdk-osx](https://github.com/x43x61x69/gbdk-osx) - Patched GBDK 2.96a for the latest compilers on OS X.

### Emulators
- [BGB](http://bgb.bircd.org/) - Powerful Game Boy emulator and debugger. Provides an accurate hardware emulation.
- [Gambatte](https://github.com/sinamas/gambatte) - Open-source, cross-platform and accurate emulator for Game Boy and Game Boy Color.

### Tools
- [ZGB](https://github.com/Zal0/ZGB) - A little engine for creating games for the original Game Boy (expands gbdk, more info [here](http://zalods.blogspot.com/2017/01/zgb-little-engine-for-game-boy.html)).
- [DevSound](https://github.com/DevEd2/DevSound) - Sound driver embeddable in homebrews which supports pulse width manipulation, arpeggios, and multiple waveforms.
- [Carillon Player](http://gbdev.gg8.se/files/musictools/Aleksi%20Eeben/Carillon%20Editor.zip) - Music Engine for Game Boy & Game Boy Color.
- [Game Boy Tile Data Generator](http://www.chrisantonellis.com/gameboy/gbtdg/) - HTML5 / JS web application that will convert bitmap images to hexadecimal data appropriate for use in tile based graphical applications, specifically GB.
- [rgbds_textmate](https://github.com/Bananattack/rgbds_textmate) - Some syntax highlighting rules for coding in Z80 assembly as a Textmate language plugin. Works in Sublime Text 2 and 3\. The syntax is particularly designed for rgbds and Game Boy-specific Z80 instructions.
- [Harry Mulder's GB Development](http://www.devrs.com/gb/hmgd/intro.html) - Some sources and home of Game Boy Tile Designer and Game Boy Map Builder tools.
- [GBT PLAYER](https://github.com/AntonioND/gbt-player) - A music player library and converter kit for Game Boy that can be used with RGBDS.
- [ROM Header Utility](http://catskull.net/GB-Logo-Generator/) - An online tool to inspect and modify a ROM's header data, including the logo.
- [gbcamextract](https://github.com/jkbenaim/gbcamextract) - Extracts photos from Game Boy Camera saves.
- [GBExtended](http://www.tensi.eu/thomas/programming/gameboy/gbextended.html) - C library extending gbdk.
- [GBZ80 to items](http://issotm.github.io/gbz80toitems3/) - 
An online converter, translates gameboy assembly into Pokémon R/B/Y items ([Source](https://github.com/ISSOtm/gbz80-to-items))
- [bmp2cgb](https://github.com/gitendo/bmp2cgb) - 8bpp bitmap converter for Gameboy Color development.
- [Vim syntax file for the Game Boy assembler RGBASM](http://www.vim.org/scripts/script.php?script_id=819) - Vim syntax highlighting for RGBDS assembly.
- [Vim syntax file for RGBDS](https://github.com/Leandros/dotfiles/blob/master/.vim/syntax/rgbds.vim) - Another Vim syntax highlighting file for RGBDS assembly.
- [gbdk-lib-extension](https://github.com/ProGM/gbdk-lib-extension) - A small set of sources and tools for the Gameboy Development Kit by Michael Hope.

## Programming Tutorials
### ASM
- [ASMSchool](http://gameboy.mongenel.com/asmschool.html) - A set of lessons by Duo about coding in Assembly for GB/GBC and disassembling.
- [dev'rs ASM section](http://www.devrs.com/gb/asmcode.php) - A lot of working demos and sources.
- [Assembly tutorial by David Pello](http://wiki.ladecadence.net/doku.php?do=show&id=tutorial_de_ensamblador) - Good document to actually learn to produce working asm code for gb. Brief explanations of many important topics. Many examples with commented source code (spanish only).
- [Assembly tutorial by David Pello](https://avivace.ovh/apps/gbdev/salvage/tutorial_de_ensamblador%20%5bLa%20decadence%5d.html) - The english version of the resource above.
- [Beginner's Guide to Reverse Engineering GB](http://web.archive.org/web/20150511145100/http://www.bennvenn.com/Beginners_Guide_To_Reverse_Engineering.htm) - Some starting tips on disassembling and reverse engineering.
- [gb-template](https://github.com/exezin/gb-template) - A template with basic functions pre-made such as joypad input, DMA transfers, and map/tile data loading.
- [assemblydigest](https://github.com/assemblydigest/gameboy) - Exploring Game Boy programming techniques.
- [Reverse Engineering for Beginners](https://beginners.re/) - Free ebook (1060 pages) by Dennis Yurichev.
- [FlappyBoy: Making a simple Game Boy Game](http://voidptr.io/blog/2017/01/21/GameBoy.html)

#### Glitches and exploits
- [DMA hijacking](https://github.com/avivace/awesome-gbdev/blob/master/articles/dma_hijacking.md) - A simple technique that allows you to run custom code in most GB/SGB/CGB games, provided you have an ACE exploit. [Demo video](http://gbdev.gg8.se/forums/viewtopic.php?id=430).
- [Pokémon Yellow ASM hack](http://pastebin.com/raw.php?i=WaFyrr21) - Debug menu. [Demo video](https://www.youtube.com/watch?v=BkIDPwkeGWs).

#### Timings
- [Game Boy DMA transfer routines](http://exez.in/gameboy-dma) - Understanding and using DMA routines.
- [Nitty Gritty Gameboy Cycle Timing](http://blog.kevtris.org/blogfiles/Nitty%20Gritty%20Gameboy%20VRAM%20Timing.txt)
- [Mode3 Sprite Timing](https://www.reddit.com/r/EmuDev/comments/59pawp/gb_mode3_sprite_timing/)
- [GameBoy Color DMA-Transfers v0.0.1](http://gameboy.mongenel.com/dmg/gbc_dma_transfers.txt)
- [STAT interrupt timings](http://gameboy.mongenel.com/dmg/istat98.txt)

### C
- [8-Bit Wonderland](http://belial.blarzwurst.de/gbpaper/paper.pdf) - Well-written introductory document about how the Game Boy works and how to start developing working code for it.
- [Grooves Game Boy Programming](https://github.com/gbdk-salvage/grooves-game-boy-programming) - A complete set of lessons about implementing various game mechanics in a Game Boy game.
- [How to Write a Simple Side Scrolling Game](http://pastebin.com/F3tHLj68) - Old (but still relevant) tutorial.
- [Just another simple tutorial](http://pastebin.com/gzT47MPJ)
- [GBDK Tutorial](https://refreshgames.co.uk/2016/04/18/gameboy-tutorial-rom/) - Fairly minimal game demo for getting started with GBDK.
- [GBDK Sprite](http://gbdev.gg8.se/wiki/articles/GBDK_Sprite_Tutorial) - Presents a workflow for getting multiple sprites to display and animate.
- [GBDK Color](http://gbdev.gg8.se/wiki/articles/GBDK_Color_Tutorial) - Extends your knowledge of basic spriting on the Game Boy by adding colors to sprites, backgrounds and the window layer.
- [GBDK Joypad](http://gbdev.gg8.se/wiki/articles/GBDK_Joypad_Tutorial) - Details the use of the joypad with GBDK.
- [Game Boy home of Flavor](http://www.personal.triticom.com/~erm/GameBoy/) - Some full games and sources.
- [GBDK Configuring and Programming Tutorial](https://videlais.com/2016/07/03/programming-game-boy-games-using-gbdk-part-1-configuring-programming-and-compiling/) - Configuring GBDK, Using Tiles, Colliding Sprites, GBTD, GBMB, Memory Management and ROM Banking.
- [Simplified GBDK examples](https://github.com/mrombout/gbdk_playground)

#### Old articles
[This](https://github.com/avivace/awesome-gbdev/tree/master/articles/salvage) folder is an historical archive of old articles, FAQs and in general text documents about Game Boy development. These may be wrong or obsolete - they are archived for historical reasons.

## Games
- [Infinity](https://github.com/infinity-gbc/infinity)

### ASM
- [RedPlusPlus](https://github.com/TheFakeMateo/RedPlusPlus) - An upgrade to Pokémon Red. Fixes several bugs and adds a lot of new features.
- [Tuff](https://github.com/BonsaiDen/Tuff.gb)
- [2048-gb](https://github.com/Sanqui/2048-gb)
- [Snake](https://bitbucket.org/Sanqui/snake/src/?at=master)
- [PlantBoy](https://github.com/siObyte/PlantBoy)
- [Lazerpong](https://github.com/huderlem/lazerpong)
- [Back to Color](https://github.com/AntonioND/back-to-color)
- [Geometrix](https://github.com/AntonioND/geometrix)
- [µCity](https://github.com/AntonioND/ucity)
- [Carazu](https://github.com/mholtkamp/carazu)
- [Snake-gb](https://github.com/DonaldHays/snake-gb)
- [GB303](https://github.com/furrtek/GB303) - GB303 wavetable-based TB-303 style synthesizer for the Nintendo Gameboy.
- [Pokémon Christmas](https://github.com/TheFakeMateo/xmas)
- [Sushi](https://github.com/JustSid/Sushi)
- [Flappy-boy-asm](https://github.com/bitnenfer/flappy-boy-asm)
- [kupman](https://github.com/dubvulture/gbdev)
- [Adjustris](https://github.com/tbsp/Adjustris)
- [exeman](https://github.com/exezin/exeman/)

### C
- [flappybird-gb](https://github.com/LuckyLights/flappybird-gb)
- [FlappyBoy](https://github.com/bitnenfer/FlappyBoy)
- [flappybird-gameboy](https://github.com/pashutk/flappybird-gameboy) - Yet another gbdk powered Flappybird clone
- [Novascape](http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=6823)
- [Squishy the Turtle](https://github.com/cppchriscpp/SquishyTheTurtle)
- [Quadratino](https://github.com/avivace/quadratino)
- [Doctor How](https://github.com/elfgames/doctorhow)
- [Super Princess' 2092 Exodus](https://github.com/Zal0/gbjam2016)
- [GBsnake](https://github.com/brovador/GBsnake)
- [gb-mines](https://github.com/andreasjhkarlsson/gb-mines)
- [oranges](http://www.atari2600land.com/gameboy/oranges.html)
- [red hot princess carnage](https://github.com/Imanolea/bitbitjam3_red_hot_princess_carnage)
- [loderunner](http://www.tensi.eu/thomas/programming/gameboy/loderunner.html)
- [Hives](https://refreshgames.co.uk/2017/04/24/ludum-dare-38-entry-hives/)
- [Bubble Factory](https://github.com/DonaldHays/bubblefactory)
- [GBC Atari Boxing](https://github.com/rubfi/gbc-atari-boxing) - Atari 2600 Boxing clone for the Game Boy (Color).

## ROMs Disassembly
- [Sonic 1](https://github.com/Kroc/Sonic1-Z80-ASM)
- [Pokémon Red/Blue](https://github.com/pret/pokered)
- [Pokémon Crystal](https://github.com/pret/pokecrystal)
- [Pokémon Pinball](https://github.com/pret/pokepinball)
- [Pokémon TCG](https://github.com/pret/poketcg)
- [Reverse engineering Kirby's Dreamland 2](http://ecc-comp.blogspot.it/2016/03/reverse-engineering-kirbys-dreamland-2.html)
- [pokemontools](https://github.com/pret/pokemon-reverse-engineering-tools) - a python module that provides various reverse engineering components for various Pokémon games.
- [Reverse Engineering a Gameboy ROM with radare2](https://www.megabeets.net/reverse-engineering-a-gameboy-rom-with-radare2) - A walkthrough to reverse engineer a Gameboy ROM challenge using radare2
- [Disassembling Link's Awakening](http://kemenaran.winosx.com/posts/category-disassembling-links-awakening/) - A series of blog posts about disassembling Link's Awakening DX.
- [Link's Awakening DX Disassembly](https://github.com/mojobojo/LADX-Disassembly)

## Related sites, posts and projects
- [ArduinoBoy](https://github.com/trash80/Arduinoboy) - Serial communication (MIDI) from an Arduino to the Game Boy for music applications such as LittleSoundDJ, Nanoloop., and mGB.
- [papiGB](https://github.com/diegovalverde/papiGB) - 
Game Boy Classic fully functional FPGA implementation from scratch
- [fpgaboy](https://github.com/trun/fpgaboy) - Implementation Nintendo's Game Boy console on an FPGA.
- [Piglet](https://github.com/danShumway/Piglet) - A LUA-driven AI that plays classic Game Boy color games using experimentation. In active development.
- [The Game Boy Project](http://marc.rawer.de/Gameboy/Docs/GBProject.pdf) - Provides a study on the hardware and detailed constructional information for the realisation of three 8-bit bidirectional parallel ports.
- [gbdk-n](https://github.com/rotmoset/gbdk-n) - Aims to update the gbdk libraries to be compatible with new versions of SDCC and provide helpers for building roms.
- [Wiz](https://github.com/wiz-lang/wiz) - A high-level assembly language for writing homebrew on retro console platforms (Game Boy, NES, Atari 2600, and more).
- [Gatesboy](https://web.archive.org/web/*/http://www.gatesboy.com/) - Non-gaming purposes applications development.
- [pdroms.de](http://pdroms.de/news/gameboy/) Game Boy releases.
- [Game Boy Demospotting](http://gameboy.modermodemet.se/en) - A collection of demos.
- [Nintendo's fake logos](http://fuji.drillspirits.net/?post=87) - Every cartridge has to show the authentic logo to be considered valid and be run, but obviously some companies managed to exploit the check system.
- [Booting the Game Boy with a custom logo](https://dhole.github.io/post/gameboy_custom_logo/) - Bypassing the Nintendo logo check.
- [GBDK Developers](http://gbdk-developers.com/) - Active blog about everything related to the scene. Including features, insights and interviews.
- [Ostrich](https://github.com/PumpMagic/ostrich) - A Game Boy Sound System player written in Swift.
- [mGB](https://github.com/trash80/mGB) - A Gameboy cartridge program that enables the Gameboy to act as a full MIDI supported sound module.
- [GBVisualizer](https://github.com/LIJI32/GBVisualizer) - Demonstrating the use of two undocumented Gameboy Color registers, nicknamed PCM12 (FF76) and PCM34 (FF77), which can be used to read the current PCM amplitude of the 4 APU channels.
- [GBVideoPlayer](https://github.com/LIJI32/GBVideoPlayer) - A technical demo demonstrating how the Gameboy LCD controller can be hacked to make a Gameboy Color play a full motion video in color, together with music.
- [ArduinoGameBoy](https://github.com/drhelius/arduinogameboy) - Arduino based Game Boy cartridge reader and writer.
- [gameboy-brainfuck](https://github.com/bitnenfer/gameboy-brainfuck) - 
Implementation of a brainfuck interpreter.
- [gb-save-states](https://github.com/mattcurrie/gb-save-states) - Patches to add save state support to Game Boy games when playing on the original hardware.


## About

### Contribute
Take a look at [Contribution Guidelines](CONTRIBUTING.md).

### License
Licensed under **GPLv3**.
See [LICENSE](LICENSE) for more information.

### Special Thanks
[Every](https://github.com/avivace/awesome-gbdev/graphs/contributors) contributor of this project, Jeff Frohwein, Pascal Felber, KOOPa, Pan of Anthrox, GABY, Marat Fayzullin, Paul Robson, Martin Korth, BOWSER, neviksti, Martin “nocash" Korth, Nitro2k01, Duo, Chris Antonellis, Michael Hope, Beware, Jonathan “Lord Nightmare” Gevaryahu, Marat Fayzullin, Paul Robson, Carsten Sorense, Sindre Aamås, Otaku No Zoku, GeeBee.
