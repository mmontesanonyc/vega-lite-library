# Vega-Lite Library
This repo is a small personal library of useful visualization approaches with Vega-Lite. Basically, I needed to keep things in one place as I learned, experimented, and wound up settling or finding useful techniques. This is the place. 

This repo uses:
- [Vega-Lite](https://vega.github.io/vega-lite/) for visualizations
- d3: specifically ```d3.csv``` to ingest data
- [Arquero](https://uwdata.github.io/arquero/) to ingest and manipulate data
- Various publicly-available data on Github, much of it from the [NYC DOHMH coronavirus-data repository](https://github.com/nychealth/coronavirus-data)

## Pages
This will probably get out of date pretty soon, but: 

- [Basic bar](https://mmontesanonyc.github.io/vega-lite-library/1-basic-bar-from-named.html): from named data source: storing data outside the spec, inserting it with Vega View.
- [Sorted bar](https://mmontesanonyc.github.io/vega-lite-library/2-sorted-bar.html): d3.csv, named data source, and a sorted bar chart.
- [Line chart](https://mmontesanonyc.github.io/vega-lite-library/3-line-from-named.html): d3.csv, named source, remote spec.
- Using vconcat
    - [Small multiples](https://mmontesanonyc.github.io/vega-lite-library/4-small-multiples-vconcat.html): charting several series from a single source.
    - [Enhancing with repeat](https://mmontesanonyc.github.io/vega-lite-library/5-vconcat-with-select.html) - using repeat and a do-nothing selection.
    - [Vconcat and layer](https://mmontesanonyc.github.io/vega-lite-library/5a-vconcat-and-layer.html). A lengthy spec, but good charts.
- [Time Selection](https://mmontesanonyc.github.io/vega-lite-library/6-brush-time-selection.html): using VL's brush to choose a range and display it on concatenated charts.
- Using Arquero
    - [Basic line chart](https://mmontesanonyc.github.io/vega-lite-library/7-arquero-line.html) plus inserting via named data source.
    - [Basic bar](https://mmontesanonyc.github.io/vega-lite-library/8-arquero-transpose.html) plus a transpose function
    - [Using Arquero with Await](https://mmontesanonyc.github.io/vega-lite-library/10-arquero-await.html): getting async stuff running.
- Arquero and time selection:
    - [Full-or-90-day selection](https://mmontesanonyc.github.io/vega-lite-library/9-arquero-line-timeselection.html): Arquero import, 90-day calculation, and basic radio button toggle.
    - [Set months view](https://mmontesanonyc.github.io/vega-lite-library/11-arquero-line-timeselection2.html): with a reset button. 
- [Calculating within VL spec](https://mmontesanonyc.github.io/vega-lite-library/12-filter-and-calculate.html): this is the syntax for using ```parseFloat()``` to create and chart calculated fields. Also done [here](https://mmontesanonyc.github.io/vega-lite-library/13-successful-named-source.html).
- Map stuff:
    - [Map and bar](https://mmontesanonyc.github.io/vega-lite-library/15-map-and-bar.html), companion and colors.
    - [Map with basic hover-highlight](https://mmontesanonyc.github.io/vega-lite-library/16-map-highlight.html).
    - [Map and bar with mutual hover-highlighting](https://mmontesanonyc.github.io/vega-lite-library/17-map-bar-highlight.html)
- [Converting VL spec to Vega spec](https://mmontesanonyc.github.io/vega-lite-library/14-VL-to-Vega.html) should give us a platform to develop simpler Vega-Lite spec, convert, and add some functions unique to Vega.
 
## Techniques
A lot of these are shown pretty simply and clearly in each page, but here's a quick summary.

### Using a named data source
Using a [named data source](https://vega.github.io/vega-lite/docs/data.html#named) gives us more opportunities to manipulate the source of the data (that is, importing data into the browser, manipulating it using JavaScript, and delivering it to the chart - rather than relying on a precisely-formatted CSV). 

### Filtering by time in a file
Essentially we're using ``` layer.transform``` as ```transform": [{"filter": "datum.date_of_interest > 0"}``` and then subbing out that 0 for a value we calculate. (Note that with a bar-and-line chart, having two layers, we need to have this filter on both layers.)

### Calculating within a file
We can calculate in ```transform.calculate```, but we need to use ```parseFloat()``` for it to work. The below does the trick, essentially creating a new calculated field of TOTAL_CASE_COUNT that we can use to chart. 
```
"transform": [
 {"calculate": "parseFloat(datum.CASE_COUNT) + parseFloat(datum.PROBABLE_CASE_COUNT)", "as": "TOTAL_CASE_COUNT"}
 ],
 ```

### Using Arquero
A lot of these examples bring data in using Arquero. This plus using named data sources should let us do a lot more manipulation within the browser.

### Map things
- Map with highlight-on-hover
- Map and bar

### Other layout stuff
- Sorted bar charts
- Vertical concatenation (useful for small multiples)

## To do list
- Continue documentation
- Double-bounded range slider
- Template out stuff like:
    - bar with highlight (in progress)
    - small multiples with mutual highlighting
    - map-and-bar with mutual highlighting
    - populate a selection menu using Arquero's ```dt.columns()```
