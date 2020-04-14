---
key: 4
title: Licensing
permalink: /licensing/
options: nolanding
excerpt: How licensing works

---



### License Terms

* Everything is [AGPLv3](http://imageresizing.net/licenses/agpl) by default
* Site-wide/enterprise-wide licensing will be the default commercial licensing model, similar to [ImageResizer](https://imageresizing.net/pricing). 
* Pricing will be sliding-scale based on company size
* OEM and SaaS licenses will be available. 

We will work with both open-source and closed-source CMSes to give them custom licensing that is compatible with their existing license terms. This is far more possible than it sounds!

Unlike ImageResizer, we aren't offering an Apache-licensed core. We don't want to unnecessarily segment functionality because of a business model, and this lets us offer you the best algorithms by default. 

### How will we enforce licenses?

This is theoretical, and subject to change. Just a representation of intentions as of May 2016. Also, as all code is AGPLv3, you can comment out the enforcement and recompile. You're legally permitted to do that. That doesn't free you from complying with applicable licenses, of course - that just disables the reminder.

### libimageflow

We will store a public key inside libimageflow, and ask for a license string (or NULL, for AGPLv3 compliant use) when you call flow_context_create();
We will decrypt your license string and parse it.
If you give libimageflow a certain byte array as an input file, the output file will be a .png of your unencrypted license information (License holder, type of license, commercial/non-commercial, expiry information, any version or use restrictions). 
We will also make APIs available to decrypt the license key and give you that information.

### Imageflow-server

If you have a domain-restricted license, we will verify that you're using imageflow-server for only that domain. If the license is invalid or inapplicable for any reason, we will superimpose a 2x2 red dot on the image. You will also be able to access a public license report over HTTP that will assist with troubleshooting. We'll never break functionality based on licensing status; at most we'll just display the red warning dot.


