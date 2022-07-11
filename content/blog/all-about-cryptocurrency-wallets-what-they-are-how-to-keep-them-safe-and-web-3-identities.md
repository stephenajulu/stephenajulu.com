---
authors:
- Stephen Ajulu
categories:
- Tech
tags:
- tech
- cryptocurrencies
- cryptocurrency
- wallets
- digital wallets
- crypto wallet
- hot wallet
- cold wallet
- seed phrase
- metamask
- coinbase wallet
- crypto scams
- wallet scams
- blockchain
- web3
- metaverse
- rainbow
- risks
- ledger
- hardware wallets
- airdrops
- nfts
- unstoppable domains
- web3 domains
- domains
- nftdomains
title: 'All About Cryptocurrency Wallets: What They Are, How To Keep Them Safe and
  Web 3 Identities'
date: 2022-07-08T09:10:00.000+03:00
hero: "/images/piggybank-3akqgjoowvi-unsplash.jpg"
description: 'All About Cryptocurrency Wallets: What They Are, How To Keep Them Safe
  and Web 3 Identities'

---
You may have heard of digital wallets used to interact with blockchain applications; perhaps you have already used them to make transactions, connect with services, marketplaces, etc. **_But do you know how wallets work? What types there are? What are private keys and seed phrases, and why is it critical to keep them secure to protect your assets and your identity on Web3? Are you aware of the most common types of scams that affect wallet users, and do you know how to protect yourself from these scams_**?

This article answers these questions, with the goal of educating users about one of the most important aspects of Web3 access infrastructure.

# Wallets or keychains?

<img src="https://miro.medium.com/max/1400/1*z_bALl_urb57HQa0su3FcQ.png" style="width:100%; height: auto;">

In the context of blockchain and Web3, a “wallet” is essentially a **_cryptographic key management system_** that doubles as a **_user interface_** allowing you to interact with network applications and services by reading and/or modifying the state of the blockchain. It is in this sense, therefore, that we will use the term “wallet” from now on.

Although the use of the term is already widespread, it is somewhat misleading, and it is worth dispelling a common misunderstanding right away. Contrary to popular belief, when you make a transaction on the blockchain you **_are not_** “sending” tokens from your wallet to someone else’s wallet. In fact, you are using your private key to sign a transaction and transmit it to the entire blockchain network. Only after the network validates your transaction will it be executed, and then this change will be reflected in the updated balances of your address and the recipient’s address.

In this sense, the term “wallet” is misleading because the applications we use to interact with the blockchain do **_not store money_** the way physical wallets do. Instead, they store the private keys that allow you to sign and make transactions, and the public keys that allow you to receive assets. A more apt analogy would be to a **_keychain_**, with the important difference that in the case of the blockchain this “keychain” not only manages the keys needed to interact with the network but also shows the record of transactions and the balances of the addresses associated with these keys.

But what exactly are the “keys” that digital wallets manage, and what are they used for?

# Keys and seed phrases

A “key”, in [the sense in which the term is used in cryptography](https://en.wikipedia.org/wiki/Key_(cryptography)), is the basis of a transformation, usually mathematical, of an ordinary message into an unreadable (encrypted) message.

In [public-key cryptography](https://networkencyclopedia.com/public-key-cryptography/), which is the standard used to implement blockchains, a pair of correlated keys are created for this purpose: the first is called **private** because it must be kept secret; the second is called **public** because it can be shared with anyone who wants to receive it. Any participant that has access to your public key can encrypt a message using that key, but only you can read it, using your private key. In addition, you can use your private key to “digitally sign” a message, allowing others to verify that you were the sender; this verification is also done using your public key.

<img src="https://miro.medium.com/max/758/0*g4IGriCGtFQI25P7" style="width:100%; height: auto;">

Public-key cryptography — Source: [Network Encyclopedia](https://networkencyclopedia.com/public-key-cryptography/)

A wallet stores and allows you to manage this key pair to interact with a blockchain.

* A **public key** refers to an address that allows you to send and receive transactions.
* A **private key** proves that you own the assets associated with your address.

You can think of your public key as analogous to your bank account number, and of your private key as analogous to the password you use to access your account and make transactions. As with banking, your public key can be shared with anyone to receive funds, but your private key, like your password, must be kept secret.

<img src="https://miro.medium.com/max/1400/0*NmmYtBfXbDpn7D04" style="width:100%; height: auto;"> 

Public & Private Keys — Source: Crypto.com

Most modern wallet implementations use a single master key, also known as a _seed phrase,_ to generate the public and private keys. This key generation system is called **deterministic** because in it the public and private keys are correlated and can always be reproduced from the same seed.

Seed phrases are represented as a list of English words (usually 12, sometimes 24) that you can write down and keep somewhere, and can reuse to retrieve your wallet if for some reason you lose access to it (say, by having a device stolen or damaged).

<img src="https://miro.medium.com/max/1400/0*f4sBRgGoSdt8V9ec" style="width:100%; height: auto;">

Example of seed phrases — source: [Realt Academy](https://blog.realt.co/seed-phrase-101-56e4c9150c43)

There are a set of industry standards for wallet implementations that ensure interoperability between different applications. Thanks to these standards, you can easily export and import your keys between wallets from different vendors.

# More than keychains — wallets as Web3 identities

The keychain analogy helps, but it doesn’t catch all the functions of wallets. In a blockchain, nodes are constantly synchronizing the state of the network and updating the history of transactions made. As we saw above, wallets connect you to the blockchain nodes and allow you to read this history and also make transactions, registering new data in the network. In this sense, we can also say that wallets work analogously to a traditional web browser, serving as a gateway to access and interact with Web1 / Web2. Wallets, in turn, are your gateway to Web3. **_But they go further, and can also serve as your identity in this new environment_**.

In Web3, [identity and reputation](http://sinahab.com/identity-and-reputation-in-web-3/) work very differently from what we are used to today. As a rule, in Web2 our identities are tied to some centralized provider, which almost always requires users to hand over confidential and personal information. Examples of such identities are your Google account, Facebook, Twitter, etc.

<img src="https://miro.medium.com/max/1400/0*J4ADchwseloMBReD" style="width:100%; height: auto;">

Web2 Login — Source: [Dev.to](https://dev.to/tadeubdev/login-com-rede-social-usando-laravel-socialite-1i61)

In Web3, you simply link your wallet to a decentralized application (dApp) to be able to interact with it. And unlike Web2 authentication methods, wallet addresses are **_pseudonymous_** by default. If a user chooses to connect the same wallet with multiple dApps, her (pseudonymous) identity can be easily transferable between those dApps, which means that over time the user can build up a sort of **_portable reputation_**, even without having to reveal her personal information.

<img src="https://miro.medium.com/max/1400/0*j1r5XSdmWAW-QHc0" style="width:100%; height: auto;">

Web3 Login — Source: [Coinbase](https://docs.cloud.coinbase.com/wallet-sdk/docs/web3modal)

As more and more aspects of our lives come to be experienced on Web3 — communication, work, education, entertainment, finance, and so on — all “orchestrated with tokens” (see [Dixon and McCormick’s definition of Web3](https://future.a16z.com/why-web3-matters/)), our very identities will become more and more intertwined with the content of our wallets. For this reason, [having a portable, privacy-preserving, and secure digital identity](https://www.forbes.com/sites/alastairjohnson/2022/01/07/a-digital-identity-fit-for-the-metaverse/?sh=6c7417d7184b) will become of paramount importance in this emerging future.

(I delve deeper into issues involving risks to our identities in Web3 and in the Metaverse in [this article](https://uxdesign.cc/digital-risks-in-the-metaverse-3bf8f0eda201).)

# Types of wallets

<img src="https://miro.medium.com/max/1400/0*n-eQ0hUKWw2tz0co" style="width:100%; height: auto;">

Types of Wallets — Source: [Odyssey DAO](https://www.odysseydao.com/articles/how-to-use-a-hot-wallet)

The first important distinction for categorizing wallets concerns whether or not they are connected to the Internet. So-called “hot wallets” are connected to the Internet, while so-called “cold wallets” are kept offline.

# Hot wallets

In hot wallets, the user’s keys are stored and encrypted in the application itself, which is kept online. Examples of hot wallets include:

* **_Web-based wallets_** (websites or browser extensions)
* **_Wallets for mobile devices_** (Android or iOS applications)
* **_Desktop Wallets_** (applications installed on your OS)

Using a hot wallet, in its different forms, is generally quite convenient, but along with convenience also comes more risk, since computer networks tend to have hidden vulnerabilities that can be targeted by hackers or malware programs, among other forms of a system intrusion.

Hot wallets can be subdivided into two further categories, having to do with the way the keys are controlled in each case.

## Custodial hot wallets

These are wallets managed by an exchange (for example, by Binance, Coinbase, Crypto.com, etc.), and require you to log in with a username and password to access them, just as you would do to access any traditional web application.

With a custodial wallet, you do not own your keys and therefore are not in full control of the assets they manage. As a popular saying in the crypto community goes, “_not your keys, not your coins!_”

Because of this, when using custodial wallets you must trust the service provider to securely store your assets and implement strong security measures to prevent unauthorized access. These measures include two-factor authentication (2FA), email confirmation, and biometric authentication, among others. Many exchanges will not allow you to transact until these security measures are properly configured by you.

## Non-custodial hot wallets

These are self-managed wallets. The keys and assets these applications manage are fully under the control of the users. But since [with great power comes great responsibility](https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility), this means that users of non-custodial wallets must take care of their own security regarding key and seed phrase storage. If any of these are lost, recovery may be difficult or even impossible, since they are not usually stored on any third-party server.

# Cold wallets

Cold wallets are, by default, offline. This makes them less convenient than hot wallets, but as a rule, also makes them more secure.

Examples of cold wallets include:

* **_Paper wallets_**: as the name implies, a paper wallet is a physical location where private keys and/or seed phrases are written or printed. Since hackers cannot access these records remotely, this method is generally more secure than using a hot wallet connected to the internet. On the other hand, it opens up the potential risk that the piece of paper will be destroyed or lost, which could result in unrecoverable funds.
* **_Stainless steel wallets_**: To avoid the risk of destroying a paper wallet in case of fire or flooding, you can also engrave your private keys on a stainless steel plate. Some manufacturers even offer ready-made kits for this type of wallet.
* **_Hardware wallets_**: A hardware wallet is an external, dedicated device (usually a USB or Bluetooth device) that stores your keys. You can only sign a transaction by pressing a physical button on the device, which malicious actors cannot control.

# Wallets with multiple signatures (multisig)

Also known as “multisig”, these are wallets that require two or more private key signatures to authorize transactions. This solution is useful for a number of use cases:

* An individual using a multisig wallet can avoid losing total access to the wallet in a scenario where one key is lost because then there will still be other keys able to sign transactions.
* Multisig wallets can make misuse of funds and fraud more difficult, which makes them a good option for hedge funds, exchanges, and corporations. Since each authorized person will have a key, and a transaction requires the use of most keys, it becomes impossible for any one individual to unilaterally perform unauthorized transactions.

(All the wallet types described above have multisig versions — hot, cold, hardware, and so on.)

# How to secure your wallet

If your wallet’s private key or seed phrase gets lost or stolen, you not only risk losing access to your assets but, given what was said before, an integral part of your identity on Web3 will be jeopardized. **_Therefore, it is crucial that you learn how to secure your wallet to avoid fraud and identity theft_**.

Here are some tips to ensure the security of your wallet:

1. **Store your private keys and your seed phrases in a safe place.** Consider copying them to paper or stainless steel and storing them very well, or, if you prefer to have online access, use a password manager (such as [1Password](https://1password.com/) or [LastPass](https://www.lastpass.com/)).
2. **Never share your private keys or seed phrases with anyone.** No matter who asks — just don’t share!
3. **Protect your password.** If your wallet has a separate password, anyone who obtains it can obtain your private key. So choose a secure password, preferably saving it in a password manager, and using [2FA](https://authy.com/what-is-2fa/).
4. **Don’t leave valuable assets in your everyday hot wallet.** Instead, put those assets in a cold wallet or in a separate hot wallet with reinforced security. If you have a lot of assets in your wallet and share your address publicly, sooner or later someone will try to pull a scam using this information and some social engineering techniques.
5. **Carefully check any website URL, email address, or social network profile before taking any action involving your wallet.** Scammers usually pose as a trusted platform to phish your seed phrase or private key.
6. **Turn off private messaging in apps like Discord and Telegram, and never interact with unknown assets (such as NFTs) that appear “out of nowhere” in your wallet.** These are two common attack vectors that scammers use.

In addition to these general tips, here are some suggestions of best practices for using **_cold wallets_** specifically:

1. **Your seed phrase is more important than the device itself**. If your cold wallet is damaged, you can always recover your assets by importing your seed phrase into another wallet. Therefore, prioritize the safety of the seed phrase as indicated above.
2. **Do not use the seed phrase from a hot wallet in your cold wallet**. The purpose of the cold wallet is to store a seed phrase offline. Reusing a hot wallet seed phrase in the cold wallet means bringing back all the problems of online storage.
3. **Be very wary of cold wallet phishing attempts**. Buy a cold wallet only from the official websites of the manufacturers (such as Ledger and Trezor). Do not respond to “support” emails, letters, or private messages asking for your seed phrase.

# Common frauds involving wallets, and tips to avoid them

One of the main goals of scammers regarding the Web3 space is to trick you into sharing your private key or your seed phrase. Here is a list of common scams for this purpose, and tips for avoiding them.

## _Phishing attacks by fake customer support accounts_

Scammers send a message via email, social network, SMS, etc., informing you that there has been some kind of problem with your wallet — for example, “Your Metamask account has been hacked.” The criminals then try to convince you to share your private key or your seed phrase, supposedly to verify that you really own the “hacked” account. If this happens:

* Carefully check the website URL, email address, social profile, or phone number from which the message originated.
* Even if the source _seems_ reliable, remember: _no reputable platform will ask for your private key or seed phrase_!

<img src="https://miro.medium.com/max/1400/0*O-IrBUBEjQXPPrmd" style="width:100%; height: auto;">

MetaMask’s Fake Support Attack — Source: [Odyssey DAO](https://www.odysseydao.com/articles/how-to-avoid-wallet-scams)

<img src="https://miro.medium.com/max/1400/0*q3mOnjpmFdQqCak0" style="width:100%; height: auto;">

Trust Wallet Fake Support Attack — Source: [Rainbow](https://learn.rainbow.me/how-to-avoid-crypto-scams)

## Airdrops of fake tokens and NFTs

Since wallet addresses are public, literally anyone can send tokens or NFTs to these addresses. This is usually not a big problem, because you can simply choose to ignore them; but some cybercriminals have developed ways to send tokens that can execute transactions on your account as soon as you interact with them. In this sense, one could compare these tokens to a trojan that allows hackers to access your computer as soon as you interact with a malicious file. A more detailed analysis of this type of scam, including an explanatory video, can be found [here](https://medium.com/metamask/phisher-watch-airdrop-scams-82eea95d9b2a).

As a precaution, be very careful with “freebies” and “gifts”, usually offered by fake profiles on social networks or by private instant messages on Discord servers or in Telegram groups. **_Never interact with a token of unknown origin in your wallet!_**

## Blind-signing

Another recent and still little-known type of attack used to steal digital assets from wallets is [blind signing](https://www.ledger.com/academy/cryptos-greatest-weakness-blind-signing-explained). This attack takes advantage of the fact that users who employ their wallets to interact with dApps and NFTs often do not review the code of the smart contracts underlying these applications and therefore may end up signing and authorizing transactions without knowing exactly what they are signing and authorizing.

For example, it is sometimes necessary to grant a third party — say, cryptocurrency exchange or an NFT marketplace — permission to conduct transactions involving tokens within your wallet. Once third-party access is approved, users can exchange tokens or list NFTs for sale without paying additional fees each time. The attackers have found ways to trick victims into giving them third-party approval over the contents of their wallets, which can be transferred to other addresses controlled by the criminals.

## Fake hardware wallets

One very ingenious scam involves sending some sort of correspondence — it can be an email or even a [physical letter in the mail](https://www.ledger.com/phishing-campaigns-status#phishing-campaigns), “signed” by a CEO of a hardware wallet manufacturer — that tries to convince the user that their wallet has suffered some sort of attack and needs to be replaced. Sometimes a new device is even sent along with the letter. But these new devices have been hacked to provide access to the fraudsters, who then clone the wallet using the previously created seed phrase to gain access to the user’s funds.

If something like this happens, simply throw these devices in the trash and inform the manufacturer of the attempt.

<img src="https://miro.medium.com/max/1400/0*o7NaXbI0hqh_aLHA" style="width:100%; height: auto;">

A fake letter signed by “Ledger CEO” — Source: [Ledger](https://www.ledger.com/phishing-campaigns-status#phishing-campaigns)

Speaking of Web3 Identities, Unstoppable Domains is on a mission to create the best web3 domains and identities on the planet. Their domains fix a lot of issues such as long complex crypto addresses, sign-in with your web3 ID, and more. My Web3 Domain is stephenajulu.crypto. Get your own now at a discounted price. Free minting and no renewal fees: [**Unstoppable Domains**](https://unstoppabledomains.pxf.io/qnXOv5)

<h3 id="1365885"><a href="https://unstoppabledomains.pxf.io/c/3290657/1365885/15384">Blockchain.com Premium Domains</a></h3>  
<img height="0" width="0" src="https://imp.pxf.io/i/3290657/1365885/15384" style="position:absolute;visibility:hidden;" border="0" />

# Sources and Further Reading

* [**Wallets as web3 identities**](https://uxdesign.cc/wallets-as-web3-identities-77fd2f7acb17) _By_ [**_Jônadas Techio_**](https://linktr.ee/jonadas) **_—_** _Blockchain Solutions Architect & Web3 Evangelist @_ [_Axur_](https://axur.com/)(Medium)
* [What is a Crypto Wallet? A Beginner’s Guide](https://crypto.com/university/crypto-wallets) (Crypto.com)
* [What is a crypto wallet? | Coinbase](https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet)
* [Public Key Cryptography — Network Encyclopedia](https://networkencyclopedia.com/public-key-cryptography/)
* [Seed Phrase 101](https://blog.realt.co/seed-phrase-101-56e4c9150c43) (Realt Academy)
* [How to use a hot wallet?](https://www.odysseydao.com/articles/how-to-use-a-hot-wallet) (Odyssey DAO)
* [The Anatomy of MetaMask. An X-ray of Web3’s Beloved Fox | by Julia Wu | Jun, 2022](https://juliawu.medium.com/the-anatomy-of-metamask-28b0d68721d2)
* [How to use a cold wallet?](https://www.odysseydao.com/articles/how-to-use-a-cold-wallet) (Odyssey DAO)
* [What is a Hardware Wallet and How Does it Work?](https://crypto.com/university/what-is-a-hardware-wallet) (Crypto.com)
* [How to avoid crypto scams](https://learn.rainbow.me/how-to-avoid-crypto-scams) (Rainbow)
* [How to avoid wallet scams?](https://www.odysseydao.com/articles/how-to-avoid-wallet-scams) (Odyssey DAO)
* [Digital Risks in Blockchain and Web3](https://conteudo.axur.com/en/ebook-digital-risks-blockchain-and-web3) (Axur — Free Ebook)
* [Digital risks in the Metaverse](https://uxdesign.cc/digital-risks-in-the-metaverse-3bf8f0eda201) (Medium)