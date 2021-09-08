# Vega-Lite Library
This repo is a small personal library of useful visualization approaches with Vega-Lite.

Testing visualizations and documenting successful approaches. This repo uses:
- [Vega-Lite](https://vega.github.io/vega-lite/) for visualizations
- d3: specifically ```d3.csv``` to ingest data
- [Arquero](https://uwdata.github.io/arquero/) to ingest and manipulate data
- Various publicly-available data on Github, much of it from the [NYC DOHMH coronavirus-data repository](https://github.com/nychealth/coronavirus-data)

## Using a named data source
Using a named data source gives us more opportunities to manipulate the source of the data (that is, importing data into the browser, manipulating it using JavaScript, and delivering it to the chart - rather than relying on a precisely-formatted CSV). 

## Filtering by time in a file
Essentially we're using ``` layer.transform``` as ```transform": [{"filter": "datum.date_of_interest > 0"}``` and then subbing out that 0 for a value we calculate. (Note that with a bar-and-line chart, having two layers, we need to have this filter on both layers.)
- Radio button
- Number input
- Using Brush selection

## Calculating within a file
We can calculate in ```transform.calculate```, but we need to use ```parseFloat()``` for it to work. The below does the trick, essentially creating a new calculated field of TOTAL_CASE_COUNT that we can use to chart. 
```
"transform": [
 {"calculate": "parseFloat(datum.CASE_COUNT) + parseFloat(datum.PROBABLE_CASE_COUNT)", "as": "TOTAL_CASE_COUNT"}
 ],
 ```

## Using Arquero
A lot of these examples bring data in using Arquero. 

## Map things
- Map with highlight-on-hover
- Map and bar

## Other layout stuff
- Sorted bar charts
- Vertical concatenation (useful for small multiples)
