Karussell, another jQuery carousel

Karussell is licensed under the terms of either the MIT License or the GNU General Public License (GPL) Version 3.

(c) 2012 Emilio Mariscal

Usage:

<pre>
    &lt;div id=&quot;carousel-wrapper&quot; class=&quot;carousel-wrapper&quot;&gt;    
      &lt;a id=&quot;carousel-prev&quot; class=&quot;carousel-prev&quot; href=&quot;#prev&quot;&gt;Prev&lt;/a&gt;
      &lt;a id=&quot;carousel-next&quot; class=&quot;carousel-next&quot; href=&quot;#next&quot;&gt;Next&lt;/a&gt; 
      &lt;ul id=&quot;carousel&quot; class=&quot;carousel&quot;&gt;
          &lt;li&gt;&lt;img src=&quot;img/photo1.jpg&quot; /&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src=&quot;img/photo2.jpg&quot; /&gt;&lt;/li&gt;
          &lt;li&gt;&lt;img src=&quot;img/photo3.jpg&quot; /&gt;&lt;/li&gt; 
      &lt;/ul&gt;
    &lt;/div&gt;
    
    $(document).ready(function () {
        $.karussell({
            id: &quot;carousel&quot;,
            wrapper: &quot;carousel-wrapper&quot;,
            prev: &quot;carousel-prev&quot;,
            next: &quot;carousel-next&quot;
        });
    })
</pre>
