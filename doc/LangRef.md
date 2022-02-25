# The `_` Programming Language Reference

## Comments

````
// This is a single-line comment

"""
This
is
a 
multi-line
comment
"""

@markdown
## This will collected by then compiler for documentation
@end

````

## Data Type

Before introducing data types, you should know the `metadata` of types first.
These `metadata` describe the properties of a type, the compiler generate these `metadata` at compile time and marked as constants.

You can access type's `metadata` like accessing normal member on the type. For example getting the size of `u8`: `u8.size`.

|Metadata|Description|
| - | - |
| `size` | The size of the type, same as `sizeof` in C |
| `bits` | The bit width of the type, for `u32` it returns `32` |
| `min` | The minimum value of the type, for `i8` it returns `-127` in type `i8` |
| `max` | The maximum value of the type, for `i16` it returns `32767` in type `i16` |
| `compound` | Return whether type is compound type (can only live as pointer) or not |

### Simple Types

#### Integers

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

#### Floatings

|Type in `_`|Equivalents in C|Description|
| - | - | - |
| `f32` | `float` | Single-precision floating point |
| `f64` | `double` | Double-precision floating point |

#### Booleans

Type: `bool`

Possible value: `true` or `false`


### Compound Types

#### Characters and Strings

The data type of character is `char`, for string it is `str`.

In `_`, characters are encoded in UTF-8 by default. Even the UTF-8 is ASCII compatible, but when the your target only support ASCII it is good to let the compiler know, so it will make sure it won't exceed the "range". You can simply use `ascii` along the `char` type or `str` type, like `ascii char` for a character or `ascii str` for string.

#### Pointers

#### Arrays

#### Structures

#### Enumerates
