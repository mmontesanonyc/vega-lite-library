# Vega-Lite Library
This repo is a small personal library of useful visualization approaches with Vega-Lite. This repo uses:
- [Vega-Lite](https://vega.github.io/vega-lite/) for visualizations
- d3: specifically ```d3.csv``` to ingest data
- [Arquero](https://uwdata.github.io/arquero/) to ingest and manipulate data
- Various publicly-available data on Github, much of it from the [NYC DOHMH coronavirus-data repository](https://github.com/nychealth/coronavirus-data)

## Pages
- [Basic bar](): from named data source: storing data outside the spec, inserting it with Vega View.
- [Sorted bar](): d3.csv, named data source, and a sorted bar chart.
- [Line chart](): d3.csv, named source, remote spec.
- Using vconcat
    - [Small multiples](): charting several series from a single source.
    - [Enhancing with repeat]() - using repeat and a do-nothing selection.
    - [Vconcat and layer](). A lengthy spec, but good charts.
- [Time Selection](): using VL's brush to choose a range and display it on concatenated charts.
- Using Arquero
    - [Basic line chart]() plus inserting via named data source.
    - [Basic bar]() plus a transpose function
    - [Using Arquero with Await](): labelled 10 here.
- Arquero and time selectino:
    - [Full-or-90-day selection](): Arquero import, 90-day calculation, and basic radio button toggle.
    - [Set months view](): with a reset button. 
- [Calculating within VL spec](): this is the syntax for using parseFloat() to create and chart calculated fields. Also done [here - 13]().
- Map stuff:
    - [Map and bar](), companion and colors.
    - [Map with basic hover-highlight]().
- [Converting VL spec to Vega spec]() should give us a platform to develop simpler Vega-Lite spec, convert, and add some functions unique to Vega.
 
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
A lot of these examples bring data in using Arquero. 

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