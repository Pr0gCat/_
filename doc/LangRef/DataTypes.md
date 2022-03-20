# Data Type

Before introducing data types, you should know the `metadata` of types first.
These `metadata` describe the properties of a type, the compiler generate these `metadata` at compile time and marked as constants.

All data type shares some common `metadata` as shown below:

|Field|Type|Description|
| - | - | - |
| `size` | number | The size of the type, same as `sizeof` in C |
| `bits` | number | The bit width of the type, for `u32` it returns `32` |

You can access type's `metadata` like accessing normal member on the type. Such as getting the size of `u8` by `u8.size`.

<!-- TODO: add type guessing mechanism desc. -->

---

## Simple Types

**Metadata**

|Field|Type|Description|
| - | - | - |
| `min` | number | The minimum value of the type, for `i8` it returns `-127` in type `i8` |
| `max` | number | The maximum value of the type, for `i16` it returns `32767` in type `i16` |

### Integers

|Type in `_`|Equivalents in C|Description|
| - | - | - |
| N `bit` | - | N bits (use in `struct`) |
| `u8` | `uint8_t` | Unsigned 8 bits integer |
| `u16` | `uint16_t` | Unsigned 16 bits integer |
| `u32` | `uint32_t` | Unsigned 32 bits integer |
| `u64` | `uint64_t` | Unsigned 64 bits integer |
| `i8` | `int8_t` | Signed 8 bits integer |
| `i16` | `int16_t` | Signed 16 bits integer |
| `i32` | `int32_t` | Signed 32 bits integer |
| `i64` | `int64_t` | Signed 64 bits integer |
| `msize` | `` | Type of the pointer |

### Floatings

|Type in `_`|Equivalents in C|Description|
| - | - | - |
| `f32` | `float` | Single-precision floating point |
| `f64` | `double` | Double-precision floating point |

### Booleans

Type: `bool`

Possible value: `true` or `false`

---

## Compound Types

### Characters and Strings

The data type of character is `char`, for string it is `str`.

In `_`, characters are encoded in UTF-8 by default. Even the UTF-8 is ASCII compatible, but when the your target only support ASCII it is good to let the compiler know, so it will make sure it won't exceed the "range". You can simply use `ascii` along the `char` type or `str` type, like `ascii char` for a character or `ascii str` for string.

### Pointers


### Arrays

```
Empty Array: []
Array with existing elements: [1, 2, 3]
Array Type: u8[]

```

### Structures

**Declare**
```
struct FooBar {
    u8 f00;
    bool bar;
}
```

**Define**
```
FooBar bar(1, true)
// or
FooBar bar {
    .f00 = 1
    .bar = true
}
```

**Access**

```
bar.f00 // 1
bar.bar = false
```

**Metadata**

|Field|Type|Desc.|
|-|-|-|


### Enumerates

**Declare**

```
// Basic
enum Foo {
    Foo, // 0
    Bar, // 1
}
// Different type
enum Result {
    OK = 0,
    Error(str),
}
```

**Define**

```
Foo bar = Foo.Foo
// or 
Result res = Result.Error("some error")
```

**Access**

```

```

**Metadata**

|Field|Type|Desc.|
|-|-|-|

---

## Casting Type

```
<u8*>()
```
