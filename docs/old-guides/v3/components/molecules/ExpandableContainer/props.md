# [ExpandableContainer](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[wrapper](#wrapper)</div> | <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |
| <div style='text-align:center;margin:auto;'>[expanded](#expanded)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[compact](#compact)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## Props list

<br>

<br>

### children

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

content to render inside Container - extended from [Container component](../../molecules/Container/props.md#children)

<br>

<br>

### wrapper

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |

<br>

component wrapper type - extended from [Container component](../../molecules/Container/props.md#wrapper)

<br>

<br>

### expanded

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Extra content showed only when container is expanded (`compact` === `true`)

<br>

<br>

### compact

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

if true, shows the whole container content

<br>

<br>

### onChange

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

Callback triggered when ExpandableContainer component input value is changed by the user

<br>
