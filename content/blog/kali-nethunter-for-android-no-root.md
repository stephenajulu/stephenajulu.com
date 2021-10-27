+++
authors = ["Stephen Ajulu"]
date = 2020-02-24T09:00:00Z
excerpt = "Offensive Security recently released Kali Nethunter for Unrooted/Nonrooted Android Device."
hero = "/images/186a28551d84d22b06898818573b5be1.webp"
timeToRead = 3
title = "Kali NetHunter for Android No Root"

+++
Hello my cybersecurity and ethical hacker enthuiasts.

I have some news for you, okay old news but still exciting.

Offensive Security recently released Kali Nethunter for Unrooted/Nonrooted Android Device.

## NetHunter Rootless Edition

##### _Maximum flexibility with no commitment_

Install Kali NetHunter on any stock, unrooted Android device without voiding the warranty.

![](/images/010-NH-Rootless-Installation_Start_s.webp)

## Prerequisite:

Android Device  
(Stock unmodified device, no root or custom recovery required)

## Installation:

* Install the NetHunter-Store app from [**https://store.nethunter.com**](https://store.nethunter.com "https://store.nethunter.com")
* From the NetHunter Store, install **Termux**, **NetHunter-KeX client**, and **Hacker’s keyboard**  
  _Note:_  
  _The button “install” may not change to “installed” in the store client after installation – just ignore it._  
  _Starting termux for the first time may seem stuck while displaying “installing” on some devices – just hit enter._
* Open Termux and type:  
  `termux-setup-storage`  
  `pkg install wget`  
  `wget -O install-nethunter-termux `[**`https://offs.ec/2MceZWr`**](https://store.nethunter.com "https://store.nethunter.com")  
  `chmod +x install-nethunter-termux`  
  `./install-nethunter-termux`

## Usage:

Open Termux and type one of the following:

* `nethunter or nh - `start Kali NetHunter command line interface
* `nethunter kex passwd - `configure the KeX password (only needed before 1st use)
* `nethunter kex & - `start Kali NetHunter Desktop Experience user sessions
* `nethunter kex stop - `stop Kali NetHunter Desktop Experience
* `nethunter <command> - `run in NetHunter environment
* `nethunter -r - `start Kali NetHunter cli as root
* `nethunter -r kex passwd - `configure the KeX password for root
* `nethunter -r kex & - `start Kali NetHunter Desktop Experience as root
* `nethunter -r kex stop - `stop Kali NetHunter Desktop Experience root sessions
* `nethunter -r kex kill - `Kill all KeX sessions
* `nethunter -r <command> - `run `<command>` in NetHunter environment as root

Note: The command `nethunter` can be abbreviated to `nh`.  
_Tip: If you run kex in the background (`&`) without having set a password, bring it back to the foreground first when prompted to enter the password, i.e. via `fg <job id>` – you can later send it to the background again via `Ctrl + z` and `bg <job id>`_

To use KeX, start the KeX client, enter your password and click connect  
_Tip: For a better viewing experience, enter a custom resolution under “Advanced Settings” in the KeX Client/_

![](/images/020-NH-Rootless-KeX_s.webp)