# draft-transclusion

This is a proof of concept of using a bit complicated transclusion on AngularJS

http://mkvster.github.io/draft-transclusion/

In this POC I am using an object with nested objects to make transclusion for each of them via element paradigm so that we can use a directive like:

<code><pre>&lt;tst-ctrl tst-model="vm.testModel"&gt;
    This is {{**tstElem**.id}} : {{**tstElem**.name}} {{vm.text}}
    &lt;span class="badge pull-right"&gt;{{**tstElem**.badge}}&lt;/span&gt;
&lt;/tst-ctrl&gt;</pre></code>

I am going to integrate this approach into <a href="https://github.com/mkvster/cell-board">Angular Cell Board</a>
