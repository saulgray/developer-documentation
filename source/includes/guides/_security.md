##Security

SHA-1 hashing for both buyers and suppiers helps prevent URL manipulation when utilized on redirects into and out of Fulcrum. Utilizing complete end-to-end link encryption makes the Fulcrum environment more secure and productive for suppliers and buyers. Fulcrum strongly recommends taking advantage of inbound and outbound URL hashing.

In order to verify the validity of any Fulcrum outbound connection or generate a hash to match with any Fulcrum inbound connection, you must create a function that computes an RFC 2014-compliant HMAC signature and substitute the following characters:

> Example key

```plaintext
ZZ6VkORqV25iSWOVb5cwZ03zpns
```

> Example Base URL

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc2=
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
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc2=NPJPxGx_-1vHe0T1q4tt-MyWnQ4
```

| Original | Substitute   |
|----------|--------------|
| +        | -            |
| /        | _            |
| =        | empty string |

It's important to note that your base string should include the entire URL up to and including the `&` preceding your encryption variable. If you do not control the destination survey environment, and your client cannot support this type of security, you should skip this step and instead use Verify Callback.

### Supplier SHA-1 Hashing

![Supplier SHA-1](images/Supplier_sha1_flowchart_v21.png)

Incoming encryption requires a hash value to be generated and appended for each respondent on the incoming supplier link. The hash value which will then be validated by Fulcrum. If the hash values match, the respondent will be allowed into Fulcrum. If they do not match, the respondent will be immediately terminated and sent back to the supplier on the Security redirect. 

On outgoing encryption, Fulcrum will append the hash value which will need to then be validated by the supplier to ensure the complete link is legitimate.

#### 1. Encryption: Interface Setup

![SHA-1 Setup](images/Supplier-SHA-1-Encryption%20Screenshot.png)

#### 2. Encryption: Incoming to Fulcrum

> URL Without Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234
```

> URL With Encryption: 

```plaintext
http://www.samplicio.us/router/default.aspx?SID=12345dca-a691-4496-a2fa-12345b99ec29&PID=1234&ienc2=XWwaVNlMH8fxcLe5OQIh-vn5_b8
```

Incoming encryption requires the supplier to append the encryption value on the Fulcrum entry links. An example of the encrypted URLs from the Supplier into Fulcrum, where the Incoming Variable Name is set to “ienc2” and the Secret Key is set to 1234567890ABC. Please note that “ienc2” and the secret key are merely example values.

If the Incoming Variable does not match the results of the algorithm, the respondent will count as a quality termination immediately upon entering Fulcrum and will be redirected on the quality termination failure link back to the supplier without the chance to route.

#### 3. Encryption: Outgoing from Fulcrum

> URL Without Encryption:

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123
```

> URL With Encryption:

```plaintext
https://www.abc.com/ex.aspx?abc=def&vid=123&oenc=h5o29uA19Z73RFWNsQU6-OW-7ls
```

Fulcrum will append the encryption value on the supplier redirect which needs to be captured and verified by the supplier. An example of the encrypted URLs from the Fulcrum to Supplier where the Outgoing Variable Name is set to “oenc” and the Secret Key is set to 1234567890ABC. Please note that “oenc” and the secret key are merely example values. All Kinesis partners should use the outgoing parameter name “hash” to ensure encryption is successful.

If the Outgoing Variable does not match the results of the algorithm, the supplier should terminate these respondents and consider them non-completes.

#### 4. SHA-1 FAQ

Can I implement SHA-1 on multiple suppliers?

- Yes.In the screenshot above you can use the drop down in the top right to change encryption settings for multiple suppliers.

Do I need to use incoming and outgoing SHA-1 encryption?

- We strongly recommend implementing both incoming and outgoing encryption. Incoming encryption helps prevent URL tampering as the respondent moves further downstream to the client survey. Catching URL link tampering earlier in the process helps reduce cheating elsewhere in the Fulcrum environment which helps buyers and clients feel more confident with the quality of your panel. Outgoing encryption helps directly prevent respondents from manipulating supplier redirects in an attempt to “fake” a complete.
Where can I get help implementing incoming and outgoing SHA-1 encryption?
