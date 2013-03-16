# RealSizer #

RealSizer是为mobile UI设计师编写的Photoshop脚本. 
可以帮助你在电脑屏幕将设计显示为真实尺寸, 和创建用于打印真实尺寸的图像.

-----------------------------

### 设置 Photoshop "屏幕分辨率" 首先项 ###

打开Photoshop从编辑 > 首选项 > 单位与标尺打开首选项对话框,
在 "新文档预设分辨率" 区域,
将"屏幕分辩率"的数值改成您显示器的分辨率(dpi)

你可以从[Wikipedia](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density)
找到你显示器的DPI或者
[计算显示器DPI](http://en.wikipedia.org/wiki/Pixel_density#Calculation_of_monitor_PPI).

### 运行 "RealSizer.jsx" ###

在运行RealSizer.jsx之前, 必须要至少先打开一个设计文档, 并选择你的目标文档, 
保证文档大小或者内容的尺寸符合你要选择的设备屏幕.

双击文件, 或者从菜单 "文件 > 脚本 > 浏览" 打开文件. 
如果要将脚本集成到Photoshop菜单, 把"RealSizer.jsx"移到Photoshop安装目录的"/Presets/Scripts/"文件内.
在下次启动PhotoShop时, 你可以从菜单 "文件 > 脚本 > RealSizer" 运行脚本.

先选择你有的真实设备, 然后点击"新窗口显示实际尺寸"或者
"创建用于打印真实尺寸的图像"按钮.

### 添加其他设备 ###

如果下拉菜单没有你的设备, 可以通过修改代码加入更多设备信息.
用文本编辑器打开"RealSizer.jsx", 找到下方第一行代码, 行尾逗号结束,
新增一行输入新设备的信息, 示例如下.

    {'title': 'Samsung Galaxy S III', 'dpi': 306, 'resolution': [720, 1280], diagonal: 4.8},
    {'title': 'Nokia Lumia 920', 'dpi': 332, 'resolution': [1280, 768], diagonal: 4.5}

设备信息可以从[Wikipedia](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density) 
或者设备官方网站上的规格参数表内找到.  
