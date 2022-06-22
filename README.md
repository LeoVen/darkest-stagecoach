# Darkest Stagecoach

<p align="center">
    <a href="https://github.com/LeoVen/darkest-stagecoach"><img src="https://img.shields.io/badge/GitHub-Darkest%20Stagecoach-D3552E.svg?logo=github" alt="LinkToRepo"/></a>
    <a href="https://leoven.github.io/darkest-stagecoach/"><img src="https://img.shields.io/badge/website-Darkest%20Stagecoach-2F3129.svg" alt="LinkToRepo"/></a>
</p>

<p align="center">A place to explore class mods for the Darkest Dungeon game</p>

There is also a bunch of tools that automatically generate data from a class mod. The following packages are in order of usage to automatically find, parse and generate data for a given class mod.

* `root_finder`: Recursively searches for the root folders of class mods
* `mod_reader`: Reads all the necessary data from a class mod folder like `.darkest` files, skills and portraits
* `parser`: Parses a `.darkest` file
* `xml_parser`: Parses string tables to get hero, skills and equipment names
* `img_compr`: Compresses images to minimize their size
* `mod_parser`: Transforms `.info.darkest` file into a more structured data about the class mod
* `mod_writer`: Writes data from class mods to be consumed by the Darkest Stagecoach
