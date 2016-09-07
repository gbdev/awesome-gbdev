# Awesome Game Boy Development [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](#awesome-gbdev)

![asd](http://orig04.deviantart.net/fb5e/f/2010/239/6/1/free_av__Game Boy_by_kiddo47.gif)A curated list of awesome Game Boy Development resources, tools, docs, related projects and open-source ROMs. Inspired by the [awesome](https://github.com/sindresorhus/awesome) list thing.

Here you can find everything to get started and master the development of unofficial software for the original 1989 Game Boy.

## Contents

- [Community](#community)
- [Documentation](#documentation)
- [Development Softwares and Tools](#development-softwares-and-tools)
- [Programming Tutorials](#programming-tutorials)
- [ROMs Disassembly](#roms-disassembly)
- [Cartridges](#cartridges)
- [Related sites, posts and projects](#related-sites-posts-and-projects)
- [Contribute](#contribute)
- [License](#license)
- [Special Thanks](#special-thanks)

## Community
- [gbdev.gg8.se](http://gbdev.gg8.se) - This is basically the home of the gbdev scene. The [wiki](http://gbdev.gg8.se/wiki/articles/Main_Page) has a lot of articles from previous sites, tutorials and other documents about a lot of topics.
- [devrs.com/gb](devrs.com/gb) - Jeff Frohwein’s page, this the main reference for everything. Almost everything is archived here: code examples and working programs(ASM and C), complete documentation and various tools.
- [#gbdev on EFnet](http://chat.efnet.org/?channels=gbdev) - IRC channel.

## Documentation
- [Game Boy Programming Manual](http://www.romhacking.net/documents/544/) - **Official Game Boy** hardware manual by Nintendo. Pretty much everything in the console is covered and explained in this manual. This should be your first and main resource to start understanding what game boy is.
- [The Cycle-Accurate Game Boy Docs](https://github.com/AntonioND/giibiiadvance/blob/master/docs/TCAGBD.pdf) - A precise documentation by AntonioND to make a cicle-accurate Game Boy emulator.
- [Pan Docs](http://bgb.bircd.org/pandocs.htm) - The single most comprehensive technical reference to Game Boy that is available to the public.
- [The Game Boy, a hardware autopsy](https://www.youtube.com/channel/UC008MpfclY6ap-QGzoTMNKg) - A video series explaining how exactly a Game Boy works.
- [gbdev Sources](https://github.com/avivace/awesome-gbdev/blob/master/SOURCES.md) - A collection of demos, homebrews and full games with complete sources (in C and ASM)
- [GBSOUND.txt](https://github.com/bwhitman/pushpin/blob/master/src/gbsound.txt) - Some informations on the sound engine.
- [DMG Schematics](http://gbdev.gg8.se/wiki/articles/DMG_Schematics) - Schematics for every part of hardware.
- [GB Instructions](http://www.chrisantonellis.com/files/Game Boy/gb-instructions.txt) Game Boy Assembly Language Commands
- [GB ASM Tips](http://www.chrisantonellis.com/files/Game Boy/gb-asm-tips.txt) - Some tips for coding in Assembly by Jeff Frohwein.
- [ASMotor Manual](http://www.chrisantonellis.com/files/Game Boy/asmotor-v0.1.0-manual.pdf) - A reference for rgbds.
- [GBDK libraries documentation](http://gbdk.sourceforge.net/doc/gbdk-doc.pdf)
- [gbdev FAQs](http://www.devrs.com/gb/files/faqs.html) - Must read by Jeff Frohwein.
- [Game Boy CPU InstructionSet Sheet (GCISheet)](http://www.devrs.com/gb/files/GBCPU_Instr.html) - Cheatsheet for the available Istruction Set.
- [Game Boy CPU Manual](http://marc.rawer.de/Game Boy/Docs/GBCPUman.pdf) - Assembly Language Commands, Timings and Opcodes.
- [Assembly Language Programming Course](http://cratel.wichita.edu/cratel/ECE238Spr08) - Machine and assembly language programming concepts that illustrate basic principles and techniques. Application through study of the Z80 chip and Game Boy programming assignments (Center for Research in Arts, Technology, Education, and Learning CRATEL at Withicha State University).
- [Building a Game Boy emulator in JavaScript](http://imrannazar.com/Game Boy-Emulation-in-JavaScript) - Step by step tutorial.
- [Game Boy Camera RE](https://github.com/AntonioND/gbcam-rev-engineer) - Documentation about GB Camera and tools used to reverse engineer it by using Arduino UNO.

## Development Softwares and Tools
- [rgbds](https://github.com/bentley/rgbds) - The main gb devkit. Assembler and linker package, currently updated. This is your main tool to write code in ASM.
- [The Game Boy Developer's Kit (GBDK)](http://gbdk.sourceforge.net/) - A set of tools that enable to develop programs for the Nintendo Game Boy system, either in C or in assembly. GBDK includes a set of libraries for the most common requirements and generates image files for use with a real Game Boy.
- [BGB](http://bgb.bircd.org/) - Powerful Game Boy emulator and debugger. Provides an accurate hardware emulation.
- [Game Boy Tile Data Generator](http://www.chrisantonellis.com/Game Boy/gbtdg/) - HTML5 / JS web application that will convert bitmap images to hexidecimal data appropriate for use in tile based graphical applications, specifically GB.
- [rgbds_textmate](https://github.com/Bananattack/rgbds_textmate) - Some syntax highlighting rules for coding in Z80 assembly as a Textmate language plugin. Works in Sublime Text 2 and 3\. The syntax is particularly designed for [RGBDS](http://www.otakunozoku.com/rednex-Game Boy-development-system/) and Game Boy-specific Z80 instructions.
- [Harry Mulder's GB Development](http://www.devrs.com/gb/hmgd/intro.html) - Some sources and home of Game Boy Tile Designer and Game Boy Map Builder tools
- [Gambatte](http://sourceforge.net/projects/gambatte/) - Open-source, cross-platform and accurate emulator for Game Boy and Game Boy Color.
- [GBT PLAYER](https://github.com/AntonioND/gbt-player) - A music player library and converter kit for Game Boy that can be used with RGBDS.

## Programming Tutorials
### asm
- [ASMSchool](http://Game Boy.mongenel.com/asmschool.html) - A set of lessons by Duo about coding in Assembly for GB/GBC and disassembling.
- [dev'rs ASM section](http://www.devrs.com/gb/asmcode.php) - A lot of working demos and sources.
- [Assembly tutorial by David Pello](http://wiki.ladecadence.net/doku.php?do=show&id=tutorial_de_ensamblador) - Good document to actually learn to produce working asm code for gb. Brief explainations of many important topics. Many examples with commented source code (spanish only).
- [Assembly tutorial by David Pello](http://92.19.232.58:82/files/Game Boy_RGBDS_ASM_Tutorial.zip) The english version of the resource above.
- [Beginners Guide to Reverse Engineering GB](http://www.bennvenn.com/Beginners_Guide_To_Reverse_Engineering.htm) Some starting tips on disassembling and reverse engineering.
- [Writing a Game Boy game in ASM](http://siobyte.xyz/1-Game Boy-tutorial/) - Intro to Binary and Hexadecimal.
- [Game Boy DMA transfer routines](http://siobyte.xyz/fast-dma/) - Understanding and using DMA routines.


### C
- [Grooves Game Boy Programming](https://github.com/gbdk-salvage/grooves-game-boy-programming) - A complete set of lessons about implementing various game mechanics in a Game Boy game.
- [8-Bit Wonderland](http://belial.blarzwurst.de/gbpaper/paper.pdf) - Well-written introductory document about how Game Boy works and how to start developing working code for it.
- [Game Boy home of Flavor](http://www.personal.triticom.com/~erm/Game Boy/) - Some full games and sources.
- [How to Write a Simple Side Scrolling Game](http://pastebin.com/F3tHLj68) - Old (but still relevant) tutorial.
- [Just another simple tutorial](http://pastebin.com/gzT47MPJ)
- [GBDK Tutorial by Ryan Carson](https://refreshgames.co.uk/2016/04/18/Game Boy-tutorial-rom/) Fairly minimal game demo for getting started with GBDK.

## ROMs Disassembly
- [Sonic 1](https://github.com/Kroc/Sonic1-Z80-ASM)
- [Pokèmon Red/Blue](https://github.com/pret/pokered)
- [Pokèmon Crystal](https://github.com/pret/pokecrystal)
- [Reverse engineering Kirby's Dreamland 2](http://ecc-comp.blogspot.it/2016/03/reverse-engineering-kirbys-dreamland-2.html)

## Cartridges
- [AntonioND's docs](https://github.com/AntonioND/giibiiadvance/tree/master/docs) - Corrected schematics and infos on cartridge header data
- [Gekkio's Game Boy cartridge types](http://gekkio.fi/blog/2015-02-14-mooneye-gb-Game Boy-cartridge-types.html) - An overview on existing cartridge types.
- [Gekkio](http://gekkio.fi/blog/)'s cartridge analysis - [DMG-BEAN-02](http://gekkio.fi/blog/2015-05-18-mooneye-gb-cartridge-analysis-dmg-bean-02.html), [MBC1](http://gekkio.fi/blog/2015-05-17-mooneye-gb-cartridge-analysis-fortress-of-fear.html), [no MBC](http://gekkio.fi/blog/2015-02-28-mooneye-gb-cartridge-analysis-tetris.html)
- [Game Boy Cartridges Schematics](http://www.devrs.com/gb/files/gb.html) - Schematics for MBC2 and MBC3 types.
- [Reiner Ziegler's Game Boy page](http://www.reinerziegler.de/readplus.htm) - Commercial and homemades programmable cartridges and programming systems. Tutorials, wiring and schematics provided.
- [MBC1+Ram+Battery cartridge Schematic](http://www.devrs.com/gb/files/mbc1.gif) - First schematics by Jeff Frohwein.
- [MBC1 and MBC2 cartridges circuits](http://fms.komkon.org/Game Boy/Tech/Carts.html) and explaination on how these MBC actually bank switch and control RAM.
- [GB Rom List](https://docs.google.com/spreadsheets/d/1cOS__xEj8bBT7cqEDgJcYStKuFAS8mMA4uErx9kA40M/edit?usp=sharing) - Navigable table of every GB game released with details on their cartridges.
- [Game Boy cartridge PCB photos](http://gekkio.fi/blog/2016-03-19-game-boy-cartridge-pcb-photos.html)

## Related sites, posts and projects
- [fpgaboy](https://github.com/trun/fpgaboy) - Implementation Nintendo's Game Boy console on an FPGA.
- [php-terminal-Game Boy-emulator](https://github.com/gabrielrcouto/php-terminal-Game Boy-emulator) - A PHP Terminal Game Boy Emulator.
- [JavaScript Game Boy Color Emulator](https://github.com/taisel/Game Boy-Online) - A Game Boy Color emulator that utilizes HTML5 canvas and JavaScript audio APIs to provide a full emulation of the console.
- [weplay](https://github.com/rauchg/weplay) - Collaborative Game Boy emulation powered 100% by JavaScript.
- [gbasm](https://github.com/BonsaiDen/gbasm) - A JavaScript based compiler for Game Boy z80 assembly code.
- [Piglet](https://github.com/danShumway/Piglet) - A LUA driven AI that plays classic Game Boy color games using experimentation. In active development.
- [The Game Boy Project](http://marc.rawer.de/Game Boy/Docs/GBProject.pdf) - A work by 6 students of Fachhochschule Karlsruhe University. The document provides a study on the hardware and detailed constructional information for the realisation of three 8 bitbidirectional parallel ports.
- [gbdk-n](https://github.com/rotmoset/gbdk-n) - This project aims to update the gbdk libraries to be compatible with new versions of SDCC and provide helpers for building roms.
- [Wiz by Andrew G. Crowell](https://github.com/Bananattack) - A high-level assembly language for writing homebrew on retro console platforms (Game Boy, NES, Atari 2600, and more).
- [Mooneye-gb](https://github.com/Gekkio/mooneye-gb) - Work-In-Progress emulator made in Rust. The main goals of this project are accuracy and documentation. Existing emulators are very accurate but are not documented very clearly, so they are not that good references for emulator developers. This project is meant to document as clearly as possible _why_ certain behaviour is emulated in a certain way. This also means writing a lot of test ROMs to figure out corner cases and precise behaviour on real hardware.
- [Gatesboy](https://web.archive.org/web/*/http://www.gatesboy.com/) - Non-gaming purposes applications development.
- [RealBoy blog](https://realboyemulator.wordpress.com/) Articles about the GB hardware and an interesting analysis of the start up phase (bootstrap).
- [pdroms.de](http://pdroms.de/news/Game Boy/) Game Boy releases.
- [Game Boy Demospotting](http://Game Boy.modermodemet.se/en) - A collection of demos.
- [Nintendo's fake logos](http://fuji.drillspirits.net/?post=87) - Every cartdrige has to show the authentic logo to be considered valid and be runned, but obviously some companies managed to exploit the check system.
- [GBDK Developers](http://gbdk-developers.com/) - Active blog about everything related to the scene. Features insights and interviews.

## Contribute
Thank you! Take a look at [Contribution Guidelines](contributing.md).

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

See [LICENSE](LICENSE) for more information.

## Special Thanks
Jeff Frohwein, Pascal Felber, KOOPa, Pan of Anthrox, GABY, Marat Fayzullin, Paul Robson, Martin Korth, BOWSER, neviksti, Martin “nocash" Korth, Nitro2k01, Duo, Chris Antonellis, Michael Hope, Beware, Jonathan “Lord Nightmare” Gevaryahu, Marat Fayzullin, Paul Robson, Carsten Sorense, Sindre Aamås, Otaku No Zoku, GeeBee.
