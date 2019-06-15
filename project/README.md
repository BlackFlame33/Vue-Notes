# Vue项目流程
下面会按顺序一一对流程进行说明，请仔细阅读，可随时问我。

*** ***

## 文件夹分类
*   bizcraft：此文件夹是使用了Bootstrap的HTML模板，内有一个完整的网站项目，我们要做的就是把这里的文件通过修改移动到另一个文件夹中。
*   project-by-vuecli：此文件夹是最终我们要交给老师的项目，从bizcraft中将文件修改后放到相应位置以达到Vue项目的要求。

*** ***

## 流程
1.  [点此下载此项目](https://github.com/BlackFlame33/Vue-Notes/raw/master/project.zip)

```点击后下载一个完整的ZIP，将其解压，得到project文件夹，内含bizcraft文件夹和project-by-vuecli文件夹。可以大致看看两个文件夹内都有些什么```

2.  构建开发环境。在project-by-vuecli中其实也有一个自动生成的README.md讲了点，我这里统一说：[点此查看Vuecli](https://cli.vuejs.org/zh/guide/installation.html)阅读相关文档。

```sh
//在cmd中输入以安装vuecli
npm install -g @vue/cli
```

```sh
//在cmd中输入以查看是否安装正确
vue --version
```

```sh
//在cmd中输入以安装vue serve
npm install -g @vue/cli-service-global
```

```sh
//通过 vue ui 命令以图形化界面创建和管理项目：
vue ui
```
![vue ui](https://cli.vuejs.org/ui-new-project.png)
把下载的project-by-vuecli导入这个包中

```sh
//在project-by-vuecli中打开cmd
npm install
```

```sh
//在IDE中打开终端输入,每当项目改动时会实时编译，查看效果
npm run serve
```

3.  开始“搬运工作”。
