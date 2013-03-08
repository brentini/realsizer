# RealSizer #

RealSizer is a Photoshop script for mobile UI designer. 
It help you to display your designs at real size on 
computer monitor, and real size printing for your design.

-----------------------------

### Setting Photoshop "Screen Resolution" Preferences ###

Open Photoshop and choose Edit > Preferences > Units & Rulers Preferences,
in the "New Document Preset Resolutions" area,
change the "screen resolution" to your monitor resolution.

You can find your monitor PPI from
[Wikipedia](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density) 
or [Calculation of monitor PPI](http://en.wikipedia.org/wiki/Pixel_density#Calculation_of_monitor_PPI).

### Run "RealSizer.jsx" ###

Double click this file, 
or choose File > Scripts > Browse and navigate to this file. 
If your want to install script to PhotoShop menu, 
Move "RealSizer.jsx" to "/Presets/Scripts/" in the Photoshop folder.
After your restart PhotoShop, you can run the script from 
"File > Scripts > RealSizer".

Choose the device you have, 
then press the 'New Window for Real Size View'
or 'New Document for Real Size Printing' button.

### Add Anther Device ###

You can and more device to the dropdown menu by add codes.

    {'title': 'Samsung Galaxy S III', 'dpi': 306, 'resolution': [720, 1280], diagonal: 4.8},
    {'title': 'Nokia Lumia 920', 'dpi': 332, 'resolution': [1280, 768], diagonal: 4.5}

Device informations can find from [Wikipedia](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density) 
or device specifications sheet from official site. 
