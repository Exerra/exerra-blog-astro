---
title: Play & mod Skyrim on a Mac without Crossover
description: This is a guide on how to play and mod Skyrim SE/AE on an Apple Silicon Mac without paying for Crossover.
publishDate: 31 Jan 2023
---

## **Table of Contents**

* [Requirements](#requirements)
* [Installing Porting Kit](#installing-porting-kit)
* [Installing Skyrim](#installing-skyrim)
    * [Settings](#settings)
* [Modding Skyrim](#modding-skyrim)
    * [Installing SKSE](#installing-skse)
    * [Installing Mod Organizer 2](#installing-mod-organizer-2)
    * [Installing mods](#installing-mods)
    * [Installing an ENB](#installing-an-enb)
    * [Mod incompatibility](#mod-incompability)

---

If you've ever wanted to play Skyrim on a Mac, you've probably run into CrossOver. It is an app that lets you open Windows applications on Mac, and thus has been used by every single article or video showing you how to play Windows games on Mac. The thing is, **CrossOver is not a free app**. It costs $64, which may not seem like a lot, but when you're trying to play a game that you've already purchased, it can be a bit of a bummer to have to fork over even more money.

![Crossover pricing](https://cdn.discordapp.com/attachments/713134823706984564/1068932701966573699/Screenshot_2023-01-28_at_18.35.42.png)

CrossOver is just a wrapper for Wine, which is a free and open-source compatibility layer that allows you to run Windows applications on other operating systems. It essentially acts as a Windows environment on your Mac, making it possible to run games like Skyrim. However, it's important to note that while CrossOver may be a more polished and user-friendly option, there are other alternatives like Porting Kit that can do the same thing, but for free. Porting Kit is less sophisticated than CrossOver, but it does (basically) the same thing, just with a bit less community support.

So, let's install Skyrim (and later mod it) with Porting Kit!

---

# Requirements

## CPU

This guide is focused on installing Skyrim on an Apple Silicon computer (aka M1, M2 etc). If you own an Intel Mac, instead of doing this, you should [install Windows thru Bootcamp](https://support.apple.com/en-us/HT201468) and run Skyrim natively.

If you're not sure on which CPU you have, click the Apple logo in the top-left, then click "About This Mac" and alongside your computers name should be the CPU in brackets. If it says M1, M2 or higher, you have an Apple silicon Mac, otherwise you have an Intel Mac.

![Instructional image on how to check which CPU you have in the "About This Mac" application](https://cdn.discordapp.com/attachments/713134823706984564/1068937123064983572/Screenshot_2023-01-28_at_18.53.08.png)

## RAM

While 8 GB of RAM will work, it is **strongly recommended** to play Skyrim on a computer with **at least 16 GB of RAM**. For all SoCs (e.g Apple silicon), RAM is shared with the GPU, but with the more conventional systems (Seperate CPU, GPU, RAM, etc) RAM and VRAM (used only for the GPU) is seperate. Because of that, Skyrim expects *at least* 4 GB of RAM, plus a decent amount of VRAM. With only 8 GB of unified memory (aka RAM) Skyrim doesn't have enough "juice" to run very smoothly under all of the emulation layers.

## Disk space

Skyrim itself is 14 GB, but I would recommend like 20 GB if you do not wish to mod Skyrim, and *at least* 30 GB if you wish to mod Skyrim (though I would recommend 40 GB).

It is possible to use an external drive for this, but it **must be formated in APFS**.

## Game

This guide focuses on the latest [Skyrim Special Edition](https://store.steampowered.com/app/489830/) version on Steam. If you own the GOG version of the game, that may also work (install steps are a bit different, mostly just selecting the GOG version in Porting Kit & downloading offline installer before clicking Install in Porting Kit).

If you own the old version of Skyrim (just named "The Elder Scrolls V: Skyrim"), you can try to follow this guide, but how well it will work I do not know. In any case, it is recommended to upgrade to the Special Edition.

---

# Installing Porting Kit

Porting Kit is the software that makes this happen. If you already own CrossOver, skip this section.

1. Download the DMG version of Porting Kit from [here](https://www.portingkit.com/download). **Do not download from any other sources**.
2. Open the DMG and drag Porting Kit into your Applications folder.
3. Open Porting Kit and follow the initial setup

---

# Installing Skyrim

Once Porting Kit is installed, navigate to the "Library" tab, then search for Skyrim in the port list. Click on the icon for "The Elder Scrolls V: Skyrim SE" (**DO NOT click the other one**), and then click "Install". It will ask you which game version you want to install (Steam or GOG). For the purposes of this guide, we will be installing the Steam version.

![Instructional image instructing which icon to click](https://cdn.discordapp.com/attachments/713134823706984564/1068962926523854938/Screenshot_2023-01-28_at_20.36.14.png)

Once the installer has appeared, just follow what the installer says & wait until it downloads everything. If you wish to put the game in a different location, the "Destination Select" stage has a button where you can change the install location. Again, **if you wish to install it on a different drive, make sure it is formatted as an APFS drive**.

Once the installer is completed, go back to Porting Kit, click on Skyrim in the sidebar and launch it. After that, you will need to log into Steam and download Skyrim Special Edition **in the default location**.

After it has finished downloading, just launch the game!

## Settings

When you arrive at the launcher, it will try to detect what settings it should run & will assign you Ultra settings. If you're playing on M1 or M2 **you cannot play with those settings** due to the massive overhead due to the translation layers.

First set the settings to Low, then click "Advanced" and check that everything in "Detail" is set to lowest & turned off. Then launch Skyrim, get past the tutorial and if it runs well, start tweaking settings to be higher (everything except view distance will need to be configured in the launcher).

If you wish to mod Skyrim, **it is important that you do this step first**, as most popular modding tools create a virtual file system that they use, and after that point the changes in the launcher won't affect the game at all (if you're launching Skyrim thru the mod manager).

---

# Modding Skyrim

There are multiple ways to mod Skyrim if you're on the Steam version. You could either use the built-in mod downloader, or download & install mods yourself with a mod manager. Granted, you could also just drag the files into the filesystem manually, but that presents large issues with safety. Most modern mod managers (e.g Mod Organizer 2 & Vortex) use virtual filesystems in order to not mess up your install of the game. With virtual filesystems, your mods are stored in a different folder than your game installation (and each mod is stored in a seperate folder even), and thus let you easily add/remove/toggle mods without messing anything up.

Another reason to go with a mod manager is that the GOG version of the game has been stripped of *any* DRM. That means that there is no Creation Club (basically paid mods) and no built-in mod downloader.

If you wish to mod Skyrim only with the built-in mod downloader, you can stop reading. From now on, everything will be focused only on how to mod Skyrim with a mod manager.

To follow this guide you will need a Nexus Mods account. If you do not already have one, go [here](https://users.nexusmods.com/register) and create one.

## Installing SKSE

This step is tehnically optional, but strongly recommended. SKSE is a script extender for Skyrim and is a required dependency of *many* mods.

First, go to the page for [The Unarchiver](https://theunarchiver.com/), then download, install and open it (you can close it later). **This app is required to extract 7z files**.

When that is done, navigate to the [official page](https://skse.silverlock.org/) for SKSE. Then look for the appropriate version for your install (Anniversary Edition for Steam, GOG Anniversary Edition build for GOG) and download it. While it is downloading, navigate to the place where you installed Skyrim on your Mac, right click it and press "Show Package Contents", open the `drive_c` folder and find your Skyrim install. For Steam users, it should be in `Program Files (x86)/Steam/steamapps/common/Skyrim Special Edition/`. Make sure that folder contains `SkyrimSE.exe`.

After that, open a new tab (or window) in Finder (the MacOS file manager), go to your Downloads folder and open the downloaded 7z file with The Unarchiver. Then, open the newly created folder, copy the `Data` folder alongside all DLL and EXE files (hold down ⌘ to be able to select multiple files), and paste it into the folder where `SkyrimSE.exe` is located.

And now SKSE is installed!

## Installing Mod Organizer 2

![Mod Organizer 2 logo](https://techphobos.com/wp-content/uploads/2022/02/Mod-Organizer.png)

Mod Organizer 2 is one of those mod managers I talked about. As of writing, Mod Organizer 2 is the best mod manager for a lot of games (notably the Fallout and Elder Scrolls series), and, fortunately, works well thru Wine.

First, go to its [Nexus Mods page](https://www.nexusmods.com/skyrimspecialedition/mods/6194?tab=files) and download the latest main file. When that is done, go to Porting Kit, right click Skyrim in the sidebar, hover over "Advanced Tools" and click "Launch Wineskin app". **Make sure all wine processes are closed** (you can go to Porting Kit, right click Skyrim and press "Force close" to make sure).

![Instructional image showing a right-click menu with "Launch Wineskin app" being highlighted](https://cdn.discordapp.com/attachments/713134823706984564/1068980719587696793/Screenshot_2023-01-28_at_21.47.37.png)

In the Wineskin app, click "Install software", then click "Choose Setup Executable" and select the Mod Organizer 2 setup EXE in the file picker.

When that is done, right click Skyrim again, hover over "Advanced Tools" and press "Add shortcut to EXE". That will open up a new window where you can write the name for the shortcut (just name it "Mod Organizer 2") and afterwards a file picker where you have to select the EXE. If you didn't change the install path, it should be `Modding/MO2/ModOrganizer.exe`.

![Instructional image showing a right-click menu with "Add shortcut to EXE" being highlighted](https://cdn.discordapp.com/attachments/713134823706984564/1068983670771306506/Screenshot_2023-01-28_at_21.59.20.png)

When that is done, launch Mod Organizer 2 through the shortcut you just made and follow the setup. If it doesn't launch, restart your Mac. Also, if it throws a warning about not being able to load a plugin, either click ignore, or blacklist the plugin.

Double-check that Mod Organizer 2 has detected all of the launchable EXEs. It always detects Skyrim Special Edition and the Launcher, but sometimes it fails to detect SKSE. If it hasn't detected SKSE, click "<Edit...>" and create a new empty executable with this path `C:\Program Files (x86)\Steam\steamapps\common\Skyrim Special Edition\skse64_loader.exe`

![Instructional image highlighting required launchable EXEs in Mod Organizer 2](https://cdn.discordapp.com/attachments/713134823706984564/1069006392956043324/image.png)

## Installing mods

With Mod Organizer 2 set up, all that is left is actually installing the mods. First, you need to locate mods. A great website where you can find mods for games is [Nexus Mods](https://www.nexusmods.com/skyrimspecialedition) (don't browse it while family is around, the Skyrim community is really horny...). If we were on Windows, we could just click the "Mod manager download" button in Nexus Mods, but because Mod Organizer 2 is run thru wine, the browser has no way to communicate with it, so click "Manual download" on a mod you want.

Once you have downloaded a mod, I would recommend putting it in the Documents folder for easy access (the wine file explorer has the Documents folder bookmarked). After that, go to Mod Organizer 2, and click the icon with a Disc at the top left. That will open a file picker, where you can quickly go to Documents and select the mod archive.

![Instructional image highlighting the button needed to install a mod in Mod Organizer 2](https://cdn.discordapp.com/attachments/713134823706984564/1069007139152085113/image.png)

When a mod is installed, make sure to enable it by toggling the checkbox next to its name.

## Installing an ENB

**Warning: Only use an ENB if you have really good performance in Skyrim.**

Installing an ENB is a bit more of a hands-on process.

First, download the latest version of the ENB engine from [the official website](http://enbdev.com/download_mod_tesskyrimse.html).

Then, unzip it, go into the unzipped folder and open the "LinuxVersion" folder. That folder contains a DLL that you have to paste into the Skyrim installation folder. In case you have forgot how to go there, refer back to the [Installing SKSE](#installing-skse) section.

After that, locate an ENB on Nexus Mods, download it and follow the instructions in the README (if there are any). If there are no instructions, just copy the following items into the Skyrim installation folder: `enbcache`, `enblocal.ini`, `enbseries`, `enbseries.ini`.

## Mod incompatibility

I have set up a document where I will track mod incompatibility on Apple silicon. You can view it [here](https://notea.exerra.xyz/Rl52zpCaJw). It will most likely not get updated often, as I do not mod Skyrim so often where I can find a lot of incompatible mods.

---

And this is the end. If you have any questions or feedback, please reach out to me. You can find my contacts in [my website](https://exerra.xyz).

If I find any issues, I will update this post to warn about it, and if it is fixable I will also include a guide on how to fix it.