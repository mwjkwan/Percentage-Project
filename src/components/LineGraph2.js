import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  XYChart,
  Tooltip,
  renderHorizontally, yAxisOrientation, xAxisOrientation,
  lightTheme, darkTheme, buildChartTheme,
  stackOffset, animationTrajectory
} from '@visx/xychart';
import data_list from "../constants/concentration_data";
import CustomChartBackground from '../styles/CustomChartBackground';
// import { customTheme } from '../styles/CustomChartTheme';
import ResizeObserver from 'resize-observer-polyfill';

export default function LineGraph2({ width, height }) {

  const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
  };

  const customTheme = buildChartTheme({
    // colors
    // backgroundColor: '#f09ae9', // used by Tooltip, Annotation
    colors: ['rgba(0, 209, 66,0.4)','rgba(8, 222, 255, 0.4)','rgba(0, 146, 209,0.4)'], // categorical colors, mapped to series via `dataKey`s
  
    // labels
    svgLabelBig: { fill: '#1d1b38' },
    // svgLabelSmall?: SVGTextProps;
    // htmlLabel?: HTMLTextStyles;
  
    // lines
    // xAxisLineStyles?: LineStyles;
    // yAxisLineStyles?: LineStyles;
    // xTickLineStyles?: LineStyles;
    // yTickLineStyles?: LineStyles;
    tickLength: 2,
  
    // grid
    gridColor: '#336d88',
    gridColorDark: '#1d1b38', // used for axis baseline if x/yxAxisLineStyles not set
    // gridStyles?: CSSProperties;
  });

  return (
    <XYChart width={width} height={height} theme = {customTheme} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
      <AnimatedAxis 
        label={
          stackOffset == null
            ? 'Temperature (°F)'
            : stackOffset === 'expand'
            ? 'Fraction of total temperature'
            : ''
        } 
        orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation} />
      <AnimatedGrid columns={false} numTicks={4} />
      <CustomChartBackground />
      <AnimatedAreaSeries dataKey="Line 1" data={data_list[0]} {...accessors} />
      <AnimatedAreaSeries dataKey="Line 2" data={data_list[1]} {...accessors} />
      <Tooltip
        resizeObserverPolyfill={ResizeObserver}
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {', '}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </XYChart>
  );
}

// Tooltip doesn't work on the moving text :(((((((((
// so this graph would have to be not on the slidy stuff, or have a portion that is not slidy stuff so can 
// I also can't center this for some reason :( 
// and the axises don't show up