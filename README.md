singular-dc
===========

Fork of the popular dc.js charting library, with fewer dependencies. This library
was forked from version 1.7.5 of dc.js. The rest of this readme file is from 
the original.



Dimensional charting built to work natively with crossfilter rendered using d3.js. Check out
[example page](http://nickqizhu.github.com/dc.js/) with a quick five minutes how to guide. For
detailed API reference please visit [Wiki](https://github.com/NickQiZhu/dc.js/wiki).


Install with npm
--------------------
npm install dc


Install without npm
--------------------
Download
* [d3.js](https://github.com/mbostock/d3)
* [crossfilter.js](https://github.com/square/crossfilter)
* [dc.js - stable](https://github.com/NickQiZhu/dc.js/releases)
* [dc.js - bleeding edge (master)](https://github.com/NickQiZhu/dc.js)


How to build dc.js locally
---------------------------

### Prerequisite modules

Make sure the following packages are installed on your machine
* node.js
* npm

### Install dependencies

```
npm install
```

### Build

By default, `grunt` does not run the tests.

```
grunt
```

To run the tests, use

```
grunt test
```

But note that as of now, they are failing. We haven't had time to investigate, 
but since this was forked from an old version, and lots of dependencies have 
changed since that was released, there are any number of possible causes.


License
--------------------

dc.js is an open source javascript library and licensed under
[Apache License v2](http://www.apache.org/licenses/LICENSE-2.0.html).
