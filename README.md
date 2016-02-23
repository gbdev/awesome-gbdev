# awesome-gbdev [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](#awesome-gbdev)

A curated list of awesome Game Boy Development resources, tools, docs, related projects and open-source ROMs. Inspired by the [awesome](https://github.com/sindresorhus/awesome) list thing.

Here you can find everything to get started and master the development of unofficial software for the original 1989 Game Boy.

## Table of Contents

- [Community](#community)
- [Documentation](#documentation)
- [Development Softwares and Tools](#development-softwares-and-tools)
- [Programming Tutorials](#programming-tutorials)
- [Cartridges] (#cartridges)
- [Related sites,posts and projects](#related-sitesposts-and-projects)
- [Contributing](#contributing)
- [Special Thanks](#special-thanks)

## Community
- [gbdev.gg8.se](http://gbdev.gg8.se) This is basically the home of the gbdev scene. The [wiki](http://gbdev.gg8.se/wiki/articles/Main_Page) has a lot of articles from previous sites, tutorials and other documents about a lot of topics.
- [devrs.com/gb](devrs.com/gb) Jeff Frohwein’s page, this the main reference for everything. Almost everything is archived here: code examples and working programs(ASM and C), complete documentation and various tools.
- [#gbdev on EFnet](http://chat.efnet.org/?channels=gbdev)

## Documentation
- [GameBoy Programming Manual](http://www.romhacking.net/documents/544/) **Official Game Boy** hardware manual by Nintendo. Pretty much everything in the console is covered and explained in this manual. This should be your first and main resource to start understanding what game boy is. 
- [Pan Docs](http://bgb.bircd.org/pandocs.htm) the single most comprehensive technical reference to GameBoy that is available to the public. 
- [DMG Schematics](http://gbdev.gg8.se/wiki/articles/DMG_Schematics)
- [GB Instructions](http://www.chrisantonellis.com/files/gameboy/gb-instructions.txt) Gameboy Assembly Language Commands 
- [GB ASM Tips](http://www.chrisantonellis.com/files/gameboy/gb-asm-tips.txt) by GeeBee 
- [ASMotor Manual](http://www.chrisantonellis.com/files/gameboy/asmotor-v0.1.0-manual.pdf) (RGBDS) 
- [GBDK libraries documentation](http://gbdk.sourceforge.net/doc/gbdk-doc.pdf) 
- [gbdev FAQs](http://www.devrs.com/gb/files/faqs.html) must read by Jeff Frohwein 
- [GameBoy CPU InstructionSet Sheet (GCISheet)](http://www.devrs.com/gb/files/GBCPU_Instr.html)</span> 
- [GameBoy CPU Manual](http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf) Assembly Language Commands, Timings and Opcodes
- [Assembly Language Programming Course](http://cratel.wichita.edu/cratel/ECE238Spr08) Machine and assembly language programming concepts that illustrate basic principles and techniques. Application through study of the Z80 chip and Gameboy programming assignments (Center for Research in Arts, Technology, Education, and Learning CRATEL at Withicha State Universiy).
- [Building a GameBoy emulator in JavaScript](http://imrannazar.com/GameBoy-Emulation-in-JavaScript) by _Imran Nazar_ 
- [gbdev Sources](https://github.com/avivace/awesome-gbdev/blob/master/SOURCES.md) a collection of homebrew and games with complete sources (in C and ASM).

## Development Softwares and Tools
- [rgbds](https://github.com/bentley/rgbds) The main gb devkit. Assembler and linker package, currently updated. This is your main tool to write code in **ASM**. 
- [The GameBoy Developer's Kit (GBDK)](http://gbdk.sourceforge.net/) A set of tools that enable to develop programs for the Nintendo GameBoy system, either in **C** or in assembly. GBDK includes a set of libraries for the most common requirements and generates image files for use with a real GameBoy. 
- [BGB](http://bgb.bircd.org/) Powerful GameBoy **emulator** and **debugger**. Provides an accurate hardware emulation.
- [Gameboy Tile Data Generator](http://www.chrisantonellis.com/gameboy/gbtdg/)** HTML5 / JS web application that will **convert bitmap images to hexidecimal data** appropriate for use in tile based graphical applications, specifically GB.
- [rgbds_textmate](https://github.com/Bananattack/rgbds_textmate) Some syntax highlighting rules for coding in Z80 assembly as a Textmate language plugin. Works in Sublime Text 2 and 3\. The syntax is particularly designed for [RGBDS](http://www.otakunozoku.com/rednex-gameboy-development-system/) and Gameboy-specific Z80 instructions. 
- [Harry Mulder's GB Development](http://www.devrs.com/gb/hmgd/intro.html)* Some sources and home of GameBoy Tile Designer and GameBoy Map Builder tools 
- [Gambatte](http://sourceforge.net/projects/gambatte/) Open-source, cross-platform and accurate **emulator** for gb/gbc

## Programming Tutorials
asm
- [ASMSchool](http://gameboy.mongenel.com/asmschool.html) In this page you can find: a set of lessons by Duo about coding in Assembly for GB/GBC (from the basics to the first program), 2 lessons about disassembling and some old articles (about asm programming) written by various coders. 
- [dev'rs ASM section](http://www.devrs.com/gb/asmcode.php) a lot of working demos and sources 
- [assembly tutorial by David Pello](http://wiki.ladecadence.net/doku.php?do=show&id=tutorial_de_ensamblador) Good document to actually learn to produce working asm code for gb. Brief explainations of many important topics. Many examples with commented source code. (spanish only) 
- [assembly tutorial by David Pello](http://92.19.232.58:82/files/GameBoy_RGBDS_ASM_Tutorial.zip) The english version by _a cat_ 
- [Beginners Guide to Reverse Engineering GB](http://www.bennvenn.com/Beginners_Guide_To_Reverse_Engineering.htm) 
- [Gameboy DMA transfer routines](http://siobyte.xyz/fast-dma/)

gbdk
- [8-Bit Wonderland](http://belial.blarzwurst.de/gbpaper/paper.pdf) Well-written introductory document about how Game Boy works and how to start developing working code for it. 
- [GameBoy home of Flavor](http://www.personal.triticom.com/~erm/GameBoy/) Some full games and sources 
- [How to Write a Simple Side Scrolling Game](http://pastebin.com/F3tHLj68) 
- [Just another simple tutorial](http://pastebin.com/gzT47MPJ)

## Cartridges
- [AntonioND's docs](https://github.com/AntonioND/giibiiadvance/tree/master/docs) corrected schematics and infos on cartridge header data [Gekkio's Gameboy cartridge types](http://gekkio.fi/blog/2015-02-14-mooneye-gb-gameboy-cartridge-types.html)
- [Gekkio](http://gekkio.fi/blog/)'s cartridge analysis [DMG-BEAN-02](http://gekkio.fi/blog/2015-05-18-mooneye-gb-cartridge-analysis-dmg-bean-02.html), [MBC1](http://gekkio.fi/blog/2015-05-17-mooneye-gb-cartridge-analysis-fortress-of-fear.html), [no MBC](http://gekkio.fi/blog/2015-02-28-mooneye-gb-cartridge-analysis-tetris.html) 
- [Gameboy Cartridges Schematics](http://www.devrs.com/gb/files/gb.html) 
- [Reiner Ziegler's GameBoy page](http://www.reinerziegler.de/readplus.htm) Commercial and homemades programmable cartridges and programming systems. Tutorials, wiring and schematics provided. 
- [MBC1+Ram+Battery cartridge Schematic](http://www.devrs.com/gb/files/mbc1.gif) by Jeff Frohwein 
- [MBC1 and MBC2 cartridges circuits](http://fms.komkon.org/GameBoy/Tech/Carts.html) and explaination on how these MBC actually bank switch and control RAM. 
- [GB Rom List](https://docs.google.com/spreadsheets/d/1cOS__xEj8bBT7cqEDgJcYStKuFAS8mMA4uErx9kA40M/edit?usp=sharing) Navigable table of every GB game released with details on their cartridges(RAM, ROM, PCB type,..)

## Related sites,posts and projects
- [The GameBoy Project](http://marc.rawer.de/Gameboy/Docs/GBProject.pdf) A work by 6 students of Fachhochschule Karlsruhe University. The document provides a **study on the hardware** and detailed constructional information for the realisation of three 8 bitbidirectional parallel ports.
- [gbdk-n](https://github.com/rotmoset/gbdk-n) This project aims to update the gbdk libraries to be compatible with new versions of SDCC and provide helpers for building roms. WIP 
- [Wiz by Andrew G. Crowell](https://github.com/Bananattack) A high-level assembly language for writing homebrew on retro console platforms (Game Boy, NES, Atari 2600, and more). WIP 
- [Mooneye-gb](https://github.com/Gekkio/mooneye-gb) Work-In-Progress emulator made in Rust. The main goals of this project are accuracy and documentation. Existing emulators are very accurate but are not documented very clearly, so they are not that good references for emulator developers. This project is meant to document as clearly as possible _why_ certain behaviour is emulated in a certain way. This also means writing a lot of test ROMs to figure out corner cases and precise behaviour on real hardware. 
- [Gatesboy](https://web.archive.org/web/*/http://www.gatesboy.com/)* non-gaming purposes applications development.
- [RealBoy blog](https://realboyemulator.wordpress.com/) Articles about the GB hardware and an interesting <span data-dobid="hdw">analysis</span> of the start up phase (bootstrap). 
- [pdroms.de](http://pdroms.de/news/gameboy/) Gameboy releases. 
- [Gameboy Demospotting](http://gameboy.modermodemet.se/en) A collection of demos. 
- [Nintendo's fake logos](http://fuji.drillspirits.net/?post=87) Every cartdrige has to show the authentic logo to be considered valid and be runned, but obviously some companies managed to exploit the check system.

## Contributing
Great! Make an individual pull request for each suggestion and be sure to include a clear title and a link to your suggested resource.

## Special Thanks
Jeff Frohwein, pascal felber, KOOPa, Pan of Anthrox, GABY, Marat Fayzullin, Paul Robson, Martin Korth, BOWSER, neviksti, NOCASH, NITRO2k01, duo, Chris Antonellis, MICHAEL HOPE, beware, lord_nigh and everyone in #gbdev irc.
Your hard work and dedication made this possible.
