# Arduino led matric displayer (8x32) smartphone controller

An arduino displayer controlled by a mobile application with bluetooth

```md
              _        _   __    __  ___ 
  /\/\   __ _| |_ _ __(_) / /   /__\/   \
 /    \ / _` | __| '__| |/ /   /_\ / /\ /
/ /\/\ \ (_| | |_| |  | / /___//__/ /_// 
\/    \/\__,_|\__|_|  |_\____/\__/___,'  
```

---

[![pipeline status](https://gitlab.com/curs3_w4ll/matriled/badges/master/pipeline.svg)](https://gitlab.com/curs3_w4ll/matriled/-/commits/master)

[![coverage report](https://gitlab.com/curs3_w4ll/matriled/badges/master/coverage.svg)](https://gitlab.com/curs3_w4ll/matriled/-/commits/master)

## Arduino setup

### Preview

![Led displayer example](img/led_matrice.jpg)

### Circuit

![Circuit image](img/circuit.jpg)

The led matric I used: [Matrice Led MAX7219](https://fr.aliexpress.com/item/32620800331.html?channel=twinner).   

---

# Branch naming convention

Branches names should look like this:

`<issue-number>_<parent-branch>_<issue-summary>`

## Convention

### `issue-number`

The id of the issue the branch is created for work on

### `parent-branch`

The name of the branch this branch will be merged to (and often is created from)

It is often the 'category' of the work

### `issue-summary`

The summary of the issue the branch is created for

## Examples

### Branch to do #13 issue and is from `Arduino` branch to create a clock

`13_Arduino_Create-clock`

### Branch to do #7 issue and is from `UI` branch to create auth page

`7_UI_Create-auth-page`

# Commit convention

Commits should look like this:

`<type>([scope]): <description> [#<issue-number>]`

`[body]`

## Convention

### `type`

The type if the classification of the modification you are commiting

For example, if you are adding a new functionality it will be `feat`

If you are solving a bug it will be `fix`

Here is a list of `type` keyword

- `feat`: adding of a new functionality / new library
- `fix`: Resolving a problem (bug, wrong display)
- `doc`: Adding new documentation
- `refact`: Refacting a part of code / all the code
- `test`: Adding tests
- `improvement`: Upgrading an existing functionality

### `scope`

The scope is optionnal, it's an indication of the part of code / functionality your commiting into

For exemple, if your adding a ci you can use: `feat(ci)`

### `description`

The description is a brief text that describe what you are committing

### `issue-number`

The issue number allow to link your commit to an issue

It also on what part of the code your working

### `body`

The body is an optionnal additionnal information to add supports (links, images, ...)

Or just describe in details the problem you are fixing / you find

## Examples

### Commiting a new language on an application

`feat(language): Adding of the russian language #14`

`Adding the russian option for the translation of the home page`

### Commiting a bugfix

`fix(keyboard): Removing the blinking effect when pressing keys #54`

### Commiting new tests

`test(authentication): Adding full test on the authentication`
