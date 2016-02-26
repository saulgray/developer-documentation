# Authentication

> To authorize, use this code:

```shell
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```ruby
class Greeter
  def initialize(name="World")
    @name = name
  end

  def say_hi
    puts "Hi #{@name}!"
  end
end
```

```php
<?php
  print("Hello {$world}");
?>
```

```python
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print a,
        a, b = b, a+b
```

```csharp
// reverse byte order (16-bit)
public static UInt16 ReverseBytes(UInt16 value)
{
  return (UInt16)((value & 0xFFU) << 8 | (value & 0xFF00U) >> 8);
}
```

> Make sure to replace `meowmeowmeow` with your API key.
