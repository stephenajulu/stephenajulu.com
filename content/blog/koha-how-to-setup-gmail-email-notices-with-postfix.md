---
authors:
- Stephen Ajulu
categories:
- Technology
- Library
tags:
- koha
- postfix
- email notices
- smtp
- koha smtp
- koha email
- koha postfix
- email
- mail
- library
- libraries
- tech
- technologies
- technology
title: 'Koha: How To Setup Gmail Email Notices with Postfix'
date: 2022-11-10T19:00:00+03:00
hero: "/images/koha-user.jpg"
description: Configure gmail with postfix to send email notices from Koha

---
## **1. Installation of postfix mail server**

Open a terminal and apply the following commands,

    sudo apt-get update && sudo apt-get install postfix

Select "no configuration" in the post-installation screen.

## **2. Copy the configuration file.**

    sudo cp /usr/share/postfix/main.cf.debian /etc/postfix/main.cf

## **3. Install the following packages as well**

    sudo apt-get install libsasl2-2 libsasl2-modules ca-certificates mailutils

## **4. Open the following file and add a few lines.**

    sudo nano /etc/postfix/main.cf

Add the following lines at the bottom of the file.

    relayhost = [smtp.gmail.com]:587
    smtp_sasl_auth_enable = yes
    smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
    smtp_sasl_security_options = noanonymous
    smtp_tls_CAfile = /etc/postfix/cacert.pem
    smtp_use_tls = yes

## **5. Configure Gmail**

Now for Gmail to work with an SMTP server. One of two things must happen.

1. For corporate accounts(Google Workspace for Business): You must go to "Manage Account" - "Security" and then allow less secure apps to access Gmail.
2. For normal/free accounts: You must enable 2-factor authentification and then set up an App Password.

Open the following file and add the Google app password for Gmail.

    sudo nano /etc/postfix/sasl_passwd

Add the following line in the opened file.

    [smtp.gmail.com]:587 urgmailid@gmail.com:yourpassword

Add your Gmail username and password.

## **6. Change the permission of the following file.**

    sudo chmod 400 /etc/postfix/sasl_passwd

## **7. Translate the _/etc/postfix/sasl_passwd_ to Postfix lookup tables.**

    sudo postmap /etc/postfix/sasl_passwd

## **8. Create the _/etc/aliases.db_**

    sudo postalias hash:/etc/aliases

## **9. Create the _/etc/postfix/cacert.pem_**

Here depends on the Ubuntu version and how recently it's been updated.

As such go to /etc/ssl/certs/ then find any certificate with _SecureCA.pem_ then replace the Equifax section and place the one you've found.

    sudo cat /etc/ssl/certs/Equifax_Secure_CA.pem >> /etc/postfix/cacert.pem

## **10. Restart Postfix.**

    sudo /etc/init.d/postfix restart

## **11. Enable email service in Koha**

Execute the following command in a terminal

    sudo koha-email-enable library

## **13. Check the following settings in Koha to send email notices,**

**Koha > Administration > Patron categories > Overdue notice required > Yes**  
\[Check for each patron category\]

[![](https://1.bp.blogspot.com/-X6HmNV23Gc0/WEGrylqX5NI/AAAAAAAAT74/r6TEsZN0mAAHVVxWNskVfnJWZIz39bFlACLcB/s640/Koha%2B%25E2%2580%25BA%2BAdministration%2B%25E2%2580%25BA%2BPatron%2Bcategories%2B%25E2%2580%25BA%2BMessaging%2Bpreferences.png =640x275)](https://1.bp.blogspot.com/-X6HmNV23Gc0/WEGrylqX5NI/AAAAAAAAT74/r6TEsZN0mAAHVVxWNskVfnJWZIz39bFlACLcB/s1600/Koha%2B%25E2%2580%25BA%2BAdministration%2B%25E2%2580%25BA%2BPatron%2Bcategories%2B%25E2%2580%25BA%2BMessaging%2Bpreferences.png)  
**Koha Administration > Global System Preferences > Patrons > Enhancedmessagingpreferences > Allow**

Set **Koha** > **Tools** > [**Overdue Notice/status triggers**](http://manual.koha-community.org/16.05/en/noticetriggers.html)  
[![](https://1.bp.blogspot.com/-nika5CdbheM/WEGrO2reR_I/AAAAAAAAT70/TRcK_LeVDog6m7mFP6YdSZiBVaU_0ZoPwCLcB/s640/Koha%2B%25E2%2580%25BA%2BTools%2B%25E2%2580%25BA%2BNotice%2Btriggers.png =640x154)](https://1.bp.blogspot.com/-nika5CdbheM/WEGrO2reR_I/AAAAAAAAT70/TRcK_LeVDog6m7mFP6YdSZiBVaU_0ZoPwCLcB/s1600/Koha%2B%25E2%2580%25BA%2BTools%2B%25E2%2580%25BA%2BNotice%2Btriggers.png)

## **14. Test the configuration**

You can test the configuration by running the following command

    echo "Test Postfix Gmail LIBRARY" | mail -s "Postfix Gmail SMTP Relay" reciever@gmail.com