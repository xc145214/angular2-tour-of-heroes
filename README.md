# angular2 tour of heroes

> 在终端窗口运行 `node -v`` 和 `npm -v`` ，来确认你的 `node`` 版本为 `v5.x.x` ， `npm` 版本为 `3.x.x` 。 老版本会出错。

##1. 创建并配置项目

**创建项目目录**

```
mkdir angular2-tour-of-heroes
cd    angular2-tour-of-heroes
```

**添加包定义与配置文件**

+ package.json 列出了“快速起步”应用的依赖，并定义了一些有用的脚本。 参见 npm 包配置 了解详情。
+ tsconfig.json 是 TypeScript 的编译器配置文件。 参见 TypeScript 配置 了解详情。
+ typings.json 指定 TypeScript 定义文件。 参见 TypeScript 定义文件 了解详情
+ typings.json identifies TypeScript definition files. See TypeScript Configuration for details.
+ systemjs.config.js 是 SystemJS 的配置文件。 参见 下面的讨论 。


**安装依赖包**

```
npm install
npm run typings install
```

## 2. 创建第一个angular2 组件

**创建app子目录**

```
mkdir app
```

**创建组件文件**

app/app.component.ts:

```
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }

```

+ 导入

Angular 应用都是模块化的。它们由很多职责明确的文件组成。 Angular 本身也是模块化的。它包括一系列的库模块，这些模块包括了一系列相关的特性，以便拿来构建应用程序。

当需要一个模块中的某些东西时，引入 `(import)` 它。 在这里，我们导入了 `Angular 2` 核心库，以便组件代码访问 `@Component` 装饰器。

+ `@Component` 装饰器

`Component` 是一个 装饰器函数 ，它接受一个 元数据对象 作为参数。 通过给这个函数加上 `@` 前缀，可以把这个函数加到组件类上，比如上面这个类。

`@Component` 是一个 装饰器 ，它把 元数据 关联到组件类上。这些元数据会告诉 Angular 如何创建和使用组件类。

`selector` 字段指定了一个简单的 CSS 选择器，用于指出放置此组件的 HTML 元素。

`template` 字段指定了此组件的模板。 它用一种增强的 HTML 形式写成，用来告诉 Angular 如何渲染此组件的视图。

+ `Component` 类

文件的最底下，是一个空的，什么也不做的类，叫做 AppComponent 。

打算构建一个真实的应用时，通过添加属性和应用逻辑来扩展这个类。 但不需要在这个“快速起步”中做这些事，所以这里的 AppComponent 类是空的。

## 3. 添加 `main.ts`

app/main.ts:

```
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent);

```

我们引入了两样东西来启动本应用：

> 1. Angular 的浏览器 bootstrap( 引导 ) 函数
> 2. 应用的根组件： AppComponent 。

+ “启动”是平台相关的

注意，我们是从 `@angular/platform-browser-dynamic`中引入的 `bootstrap` 函数，而不是从 @angular/core 中。 “引导”不是核心的一部分，因为没有单一的途径来启动应用。诚然，大部分应用都是在浏览器中调用 bootstrap 函数的。

但从其它环境中加载组件也是可能的。 可能需要通过 `Apache Cordova` 或 `NativeScript` 在移动设备中加载它。 可能希望在服务器中渲染第一个页面来提高启动效率或 让 SEO 更加容易。 要达成这些目标，我们需要从其它库中引入一个不同类型的 bootstrap 函数。

+ 为什么创建一个分离的 main.ts 文件和应用组件文件？

无论是 main.ts 还是组件的文件都非常小。 它只是一个“快速起步”而已。 我们本可以把这两个文件装进 app.component 文件来减少一点复杂度。

但我们应该用正确的方式组织 Angular 应用的文件结构。 启动 App 与展现视图是两个相互分离的关注点。 把这些关注点混在一起会增加不必要的难度。 可以通过使用不同的引导器 (bootstraper) 来在不同的环境中启动 AppComponent 。 测试组件也变得更容易，因为不需要再运行整个程序才能跑测试。 让我们多花一点精力来用 “正确的方式” 实现它。

## 4. 添加 index.html

index.html:

```
<html>
  <head>
    <title>Angular 2 QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>

```

添加样式 style.css:

```
h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
}
body {
    margin: 2em;
}
```

## 5. 构建并运行本应用

```
npm start
```