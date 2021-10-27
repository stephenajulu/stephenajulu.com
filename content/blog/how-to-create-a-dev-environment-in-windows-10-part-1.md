+++
authors = ["Stephen Ajulu"]
date = 2020-07-09T14:00:00Z
excerpt = "Gone are the days Linux and Mac were the go to for development. Microsoft has leveled the playing field with WSL2. Today i would like to help you create a dev/hacking environment in Windows 10. So let's get started"
hero = "/images/linux-windows.webp"
timeToRead = 4
title = "How to Create a Dev Environment in Windows 10: Part 1"

+++
Hi, guys? Long time, huh? Hope you are all doing great! and you are all safe and sound. Today i would like to help you create a development/hacking environment in Windows 10. So let’s get started with Part 1: First Installation.

First you’ll need to make sure you have a Windows 10, updated to 10th May 202 version(Windows 10, Version 2004, Build 19041 or higher).

Now i would like you to install the Windows Subsystem for Linux v1 and 2.

## Here’s the installation:

## WSL1

Before installing any Linux distributions on Windows, you must enable the “Windows Subsystem for Linux” optional feature.

Open PowerShell as Administrator and run:

    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

To only install WSL 1, you should now restart your machine and move on to [Install your Linux distribution of choice](https://docs.microsoft.com/en-us/windows/wsl/install-win10#install-your-linux-distribution-of-choice), otherwise wait to restart and move on to update to WSL 2. Read more about [Comparing WSL 2 and WSL 1](https://docs.microsoft.com/en-us/windows/wsl/compare-versions).

## WSL2

To update to WSL 2, you must meet the following criteria:

* Running Windows 10, [updated to version 2004](https://ajulusthoughts.wordpress.com/2020/07/09/how-to-create-a-dev-environment-in-windows-10-part-1/windowsupdate), **Build 19041** or higher.
* Check your Windows version by selecting the **Windows logo key + R**, type **winver**, select **OK**. (Or enter the _`ver`_ command in Windows Command Prompt). Please [update to the latest Windows version](https://ajulusthoughts.wordpress.com/2020/07/09/how-to-create-a-dev-environment-in-windows-10-part-1/windowsupdate) if your build is lower than 19041. [Get Windows Update Assistant](https://www.microsoft.com/software-download/windows10).

#### Enable the ‘Virtual Machine Platform’ optional component

Before installing WSL 2, you must enable the “_Virtual Machine Platform_” optional feature.

Open PowerShell as Administrator and run: PowerShell

    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart


**Restart** your machine to complete the WSL install and update to WSL 2.

#### Set WSL 2 as your default version

Run the following command in PowerShell to set WSL 2 as the default version when installing a new Linux distribution: PowerShell

    wsl --set-default-version 2

You might see this message after running that command: _`WSL 2 requires an update to its kernel component. For information please visit`_[_`https://aka.ms/wsl2kernel`_](https://aka.ms/wsl2kernel "https://aka.ms/wsl2kernel"). Please follow the link ([https://aka.ms/wsl2kernel](https://aka.ms/wsl2kernel "https://aka.ms/wsl2kernel")) and install the MSI from that page on our documentation to install a Linux kernel on your machine for WSL 2 to use. Once you have the kernel installed, please run the command again and it should complete successfully without showing the message.

Note

The update from WSL 1 to WSL 2 may take several minutes to complete depending on the size of your targeted distribution. If you are running an older (legacy) installation of WSL 1 from Windows 10 Anniversary Update or Creators Update, you may encounter an update error. Follow these instructions to [uninstall and remove any legacy distributions](https://docs.microsoft.com/en-us/windows/wsl/install-legacy#uninstallingremoving-the-legacy-distro).

If _`wsl --set-default-version`_ results as an invalid command, enter _`wsl --help`_. If the _`--set-default-version`_ is not listed, it means that your OS doesn’t support it and you need to update to version 2004, Build 19041 or higher.

#### Install your Linux distribution of choice

1. Open the [Microsoft Store](https://aka.ms/wslstore) and select your favorite Linux distribution. ![View of Linux distributions in the Microsoft Store](https://docs.microsoft.com/en-us/windows/wsl/media/store.png) The following links will open the Microsoft store page for each distribution:
   * [Ubuntu 16.04 LTS](https://www.microsoft.com/store/apps/9pjn388hp8c9)
   * [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)
   * [Ubuntu 20.04 LTS](https://www.microsoft.com/store/apps/9n6svws3rx71)
   * [openSUSE Leap 15.1](https://www.microsoft.com/store/apps/9NJFZK00FGKV)
   * [SUSE Linux Enterprise Server 12 SP5](https://www.microsoft.com/store/apps/9MZ3D1TRP8T1)
   * [SUSE Linux Enterprise Server 15 SP1](https://www.microsoft.com/store/apps/9PN498VPMF3Z)
   * [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)
   * [Debian GNU/Linux](https://www.microsoft.com/store/apps/9MSVKQC78PK6)
   * [Fedora Remix for WSL](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)
   * [Pengwin](https://www.microsoft.com/store/apps/9NV1GV1PXZ6P)
   * [Pengwin Enterprise](https://www.microsoft.com/store/apps/9N8LP0X93VCP)
   * [Alpine WSL](https://www.microsoft.com/store/apps/9p804crf0395)

For a development environment i recommend [**Ubuntu**](https://www.microsoft.com/store/apps/9n6svws3rx71) and for Hacking i recommend [**Kali Linux**](https://www.microsoft.com/store/apps/9PKR34TNCV07). But feel free to choose any you like. Linux is linux and we will be working mostly on the terminal.

1. From the distribution’s page, select “Get”. ![Linux distributions in the Microsoft store](https://docs.microsoft.com/en-us/windows/wsl/media/ubuntustore.png)

#### Set up a new distribution

The first time you launch a newly installed Linux distribution, a console window will open and you’ll be asked to wait for a minute or two for files to de-compress and be stored on your PC. All future launches should take less than a second.

You will then need to [create a user account and password for your new Linux distribution](https://docs.microsoft.com/en-us/windows/wsl/user-support).

![Ubuntu unpacking in the Windows console](https://docs.microsoft.com/en-us/windows/wsl/media/ubuntuinstall.png)

#### Set your distribution version to WSL 1 or WSL 2

You can check the WSL version assigned to each of the Linux distributions you have installed by opening the PowerShell command line and entering the command (only available in [Windows Build 19041 or higher](https://ajulusthoughts.wordpress.com/2020/07/09/how-to-create-a-dev-environment-in-windows-10-part-1/windowsupdate)): _`wsl -l -v`_ PowerShell

    wsl --list --verbose

To set a distribution to be backed by either version of WSL please run: PowerShell

    wsl --set-version <distribution name> <versionNumber>

Make sure to replace _<distribution name>_ with the actual name of your distribution and _<versionNumber>_ with the number ‘1’ or ‘2’. You can change back to WSL 1 at anytime by running the same command as above but replacing the ‘2’ with a ‘1’.

Additionally, if you want to make WSL 2 your default architecture you can do so with this command: PowerShell

    wsl --set-default-version 2

This will set the version of any new distribution installed to WSL 2.

Now we need a good terminal emulator application to manage the OS you’ve installed. I recommend [Hyper](http://hyper.is/) and [Windows Terminal](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwihjb2xzb_qAhXIxoUKHZk6CwcQFjAAegQIARAB&url=https%3A%2F%2Fwww.microsoft.com%2Fen-us%2Fp%2Fwindows-terminal%2F9n0dx20hk701&usg=AOvVaw0T3sd9IQM_S3Udg4fr3Xkz). I use Hyper.

If you are a beginner go over here to learn about basic terminal commands: [**Terminal Commands**](https://ajulusthoughts.wordpress.com/2019/05/30/basic-linux-commands/).

That’s the end of part 1. Part 2: [**Coming Soon**](https://ajulusthoughts.wordpress.com/2020/07/09/how-to-create-a-dev-environment-in-windows-10-part-2/)