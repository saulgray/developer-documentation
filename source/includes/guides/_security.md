##Security

Fulcrum is capable of handling SHA-1 URL hashing on all incoming and outgoing links.  We strongly recommend that all integrations take advantage of this feature to protect against fraudulent link manipulation.

![SHA-1 Setup](/source/images/Supplier_sha1_flowchart_v21.png)
 
Your secret key and variable name configuration can be set or disabled in the Fulcrum UI. In order to verify the validity of any Fulcrum outbound connection or generate a hash to match with any Fulcrum inbound connection, you must create a function that computes an RFC 2014-compliant HMAC signature and substitute the following characters:

| Original | Substitute   |
|----------|--------------|
| +        | -            |
| /        | _            |
| =        | empty string |

<aside class="notice">When hashing URLs for Fulcrum your base string should include the entire URL, up to and including the `&` preceding your encryption variable.  When hashing URLs for Pulley your base string should include the entire URL up to but NOT including the `&` preceding your encryption variable.</aside>

### Generating a HMAC signature

Accounts with Incoming SHA-1 Encryption enabled will need to generate an HMAC signature value using the secret key set in Fulcrum and append the hash value on links directing users to Fulcrum.  Hash values should be appended to the URL following the hash label set in Fulcrum.  When a respondent enters Fulcrum on a url with a SHA-1 hash, Fulcrum will attempt to validate the hash. If the hash is found to be valid the user will be allowed to proceed.  If the hash value is found to be invalid the user's session will be terminated.

For information on how to set a SHA-1 hash label and Secret Key in Fulcrum, see the "Configure SHA-1 Settings in Fulcrum"

Suppliers that have enabled Incoming SHA-1 hashing will append the signature to the Fulcrum entry links provided to respondents.

Buyers that have enabled Incoming SHA-1 hashing will append the signature to the all Callback links used to return respondents to Fuclrum. 

An example, of a hashed URL that using "ienc" as the label and Secret Key of `ZZ6VkORqV25iSWOVb5cwZ03zpns` as the secret key, can be found here.  Please note, `ienc` and the secret key `ZZ6VkORqV25iSWOVb5cwZ03zpns` are just examples values.

Use our hashing tool to validate your system's SHA-1 hashing!
https://labs.lucidhq.com/hash

### Verifying a HMAC signature

> Example key

```plaintext
ZZ6VkORqV25iSWOVb5cwZ03zpns
```

> Example Base URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&
```

> URL Without Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234&
```

> URL With Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234&ienc=n3yzbU4WgqUT5hNKm7AnN07falA
```

Accounts with Outgoing SHA-1 Encryption enabled will need to be able to validate an HMAC signature hash value.  Fulcrum will append this hash value when passing respondents to your platform. Fulcrum will use the SHA-1 label and secret key set in Fulcum to generate and appending the hash. 

Buyers will find these signatures appended to the links used by respondents to enter a client survey.  

Suppliers will see these signatures appended to the links on which respondents are returned to your platform from Fulcurm.

An example of the encrypted URLs where the variable name is set to “oenc” and the Secret Key is set to "ZZ6VkORqV25iSWOVb5cwZ03zpns". Please note that “oenc” and the secret key are merely example values.

> Example key

```plaintext
ZZ6VkORqV25iSWOVb5cwZ03zpns
```

> Example Base URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&
```

> Example Signature

```plaintext
dYQuf4tCr1l07nDRpzO+PLSBNTQ=
```
> Example Encoded Signature

```plaintext
dYQuf4tCr1l07nDRpzO-PLSBNTQ
```

> Example Final URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc=dYQuf4tCr1l07nDRpzO-PLSBNTQ
```

### Configure SHA-1 Settings in Fulcrum
Buyers will configure these settings by navigating to the `Clients` tab locate `{Your Account} API_Client` and click on the `Name`, you will be directed to the Client Details page where you will find the setting options under `Show Encryption`.

Suppliers will configure these settings by clicking on the `Supply` tab to navigate to the `Supplier Surveys` page.  From the supply list page click on the `Optimizer Preferences` tab, which will navigate you to the `Supplier Preferences` page, where you will select `Encryption` from the side menu.

### SHA-1 FAQ

Can I implement SHA-1 on multiple suppliers?

- Yes.In the screenshot above you can use the drop down in the top right to change encryption settings for multiple suppliers.

Do I need to use incoming and outgoing SHA-1 encryption?

- We strongly recommend implementing both incoming and outgoing encryption. Incoming encryption helps prevent URL tampering as the respondent moves further downstream to the client survey. Catching URL link tampering earlier in the process helps reduce cheating elsewhere in the Fulcrum environment which helps buyers and clients feel more confident with the quality of your panel. Outgoing encryption helps directly prevent respondents from manipulating supplier redirects in an attempt to “fake” a complete.
