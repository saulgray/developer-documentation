## Security

> Example key

```plaintext
ZZ6VkORqV25iSWOVb5cwZ03zpns
```

> Example Base URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc=
```

> Example Signature

```plaintext
NPJPxGx/+1vHe0T1q4tt+MyWnQ4=
```
> Example Encoded Signature

```plaintext
NPJPxGx_-1vHe0T1q4tt-MyWnQ4
```

> Example Final URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc=NPJPxGx_-1vHe0T1q4tt-MyWnQ4
```
Fulcrum strongly recommends taking advantage of inbound and outbound URL hashing, which will prevent respondents from manipulating links.

![SHA-1 Setup](images/Supplier-SHA-1-Encryption Screenshot.png)

Your secret key and variable name configuration can be set or disabled in the Fulcrum UI. In order to verify the validity of any Fulcrum outbound connection or generate a hash to match with any Fulcrum inbound connection, you must create a function that computes an RFC 2014-compliant HMAC signature and substitute the following characters:
| Original | Substitute   |
|----------|--------------|
| +        | -            |
| /        | _            |
| =        | empty string |
It's important to note that your base string should include the entire URL up to and including the `&` preceding your encryption variable.

### Generating a HMAC signature

> URL Without Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234
```

> URL With Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234&ienc2=XWwaVNlMH8fxcLe5OQIh-vn5_b8
```
Accounts with Incoming SHA-1 Encryption enabled will want to will want to generate and append an HMAC signature value when directing users to the Fulcrum domain.  For suppliers this means appending the signature to entry links provided to Respondents.  For Buyers this means appending signatures to Callback links on which Respondents are return to Fuclrum.

Once the HMAC signature value has been generated it should be added to the url following the variable name that has been set for the account in the Fulcrum UI. Fulcrum will attempt to validate the hash once the user navigates to our platform. If Fulcrum is able to validate the signature value, the User will be allowed to proceed.  If the signature value cannot be validated the users session will be terminated.  An example of the encrypted URLs, where the Incoming Variable Name is set to “ienc2” and the Secret Key use is to generate the signature value is 1234567890ABC, is available in the code column. Please note that “ienc2” and the secret key are merely example values.

### Verifying a HMAC signature

> URL Without Encryption:

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123
```

> URL With Encryption:

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc=h5o29uA19Z73RFWNsQU6-OW-7ls
```

Accounts with Outgoing SHA-1 Encryption enabled will need to attempt to validate an HMAC signature value that Fulcrum will append to links we sent to your platform. Buyers will see these signatures appended to the links used by Respondents to enter a client survey.  Suppliers will see these signatures appended to the links on which respondents are returned to your platform from Fulcurm.
Fulcrum will append the signature following the variable label set for the account in the Fulcrum UI.  An example of the encrypted URLs where the variable name is set to “ienc2” and the Secret Key is set to 1234567890ABC. Please note that “ienc2” and the secret key are merely example values.

### Configure SHA-1 Settings for an Account

Buyers will configure these settings by navigating to the `Clients` tab locate `{Your Account} API_Client` and click on the `Name`, you will be directed to the Client Details page where you will find the setting options under `Show Encryption`.

Suppliers will configure these settings by clicking on the `Supply` tab to navigate to the `Supplier Surveys` page.  From the supply list page click on the `Optimizer Preferences` tab, which will navigate you to the `Supplier Preferences` page, where you will select `Encryption` from the side menu.

#### 4. SHA-1 FAQ

Can I implement SHA-1 on multiple suppliers?

- Yes.In the screenshot above you can use the drop down in the top right to change encryption settings for multiple suppliers.

Do I need to use incoming and outgoing SHA-1 encryption?

- We strongly recommend implementing both incoming and outgoing encryption. Incoming encryption helps prevent URL tampering as the respondent moves further downstream to the client survey. Catching URL link tampering earlier in the process helps reduce cheating elsewhere in the Fulcrum environment which helps buyers and clients feel more confident with the quality of your panel. Outgoing encryption helps directly prevent respondents from manipulating supplier redirects in an attempt to “fake” a complete.
Where can I get help implementing incoming and outgoing SHA-1 encryption?
