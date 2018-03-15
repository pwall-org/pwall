### pwall.org - a lightweight, open-source, universal paper wallet generator
# ![](img/wallet.png)
#### Description
Using third-party services to generate paper wallets should be avoided without proper code auditing by independent entities.  
Unnecessary codes and poorly written libraries are often used, creating a huge security risk for users.  
Some services advertise that their generator works offline, and thus its users are immune to private key theft.
However, there is still a possibility that an offline paper wallet generator creates keys deterministically without ever needing to communicate this information in any way.  
For this reason, I wouldn't trust any random websites offering offline paper wallet generators without proper investigation.  
pwall, on the other hand, contains no bloat but only the essentials.
Feel free to use it. https://pwall.org/ 

#### Features
* Simple, efficient, secure
* Client-side, works offline
* Updated constantly
* Transparent, easy to audit
* Integrity of files validated using SHA-256 hashes; meaning files have not been tampered with (see below)
* More than 500 cryptocurrencies supported
* Almost every major cryptocurrency easily accessible using subdomains **[coin].pwall.org**:
	* https://bitcoin.pwall.org
	* https://bitcoincash.pwall.org
	* https://ethereum.pwall.org
	* https://litecoin.pwall.org
	* https://stellar.pwall.org
	* https://ripple.pwall.org
	* ...
		
#### Instructions
* Use this generator offline for maximum security.
* Generate and print your wallet. Keep it in a secure location.
* Deposit funds to your paper wallet by sending them to the public address.
* Private key is used to spend funds. Do not share it!

#### Tips appreciated!  
**BTC**: 137H4GbcDz3e3DS9ADDbee4wa1GHHdcEnW  
**ETH**: 0x0bDcBCbB9B0aCA3EAEE7a94A4fb5FB0f16681e2f  
:punch: