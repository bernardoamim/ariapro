import dynamic from 'next/dynamic'

const ResponsiveBar = dynamic(
  () => import('@nivo/bar').then((mod) => mod.ResponsiveBar),
  { ssr: false },
)

interface IBarChartDataProps {
  [k: string]: string | number
}

interface IBarChartProps {
  data: IBarChartDataProps[]
}

function BarChart({ data /* see data tab */ }: IBarChartProps) {
  return (
    <ResponsiveBar
      data={data}
      keys={['real', 'ideal']}
      indexBy="name"
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      padding={0.8}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={({ id, data }) => String(data[`${id}Color`])}
      minValue={0}
      borderRadius={8}
      maxValue="auto"
      enableLabel={false}
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: '#38bcb2',
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: '#eed312',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'fries',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'sandwich',
      //     },
      //     id: 'lines',
      //   },
      // ]}
      // borderColor={{
      //   from: 'color',
      //   modifiers: [['darker', 1.6]],
      // }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -30,
        // legend: 'country',
        // legendPosition: 'middle',
        // legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'food',
        // legendPosition: 'middle',
        // legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      // legends={[
      //   {
      //     dataFrom: 'keys',
      //     anchor: 'bottom-right',
      //     direction: 'column',
      //     justify: false,
      //     translateX: 120,
      //     translateY: 0,
      //     itemsSpacing: 2,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: 'left-to-right',
      //     itemOpacity: 0.85,
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: 'hover',
      //         style: {
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
      // role="application"
      // ariaLabel="Nivo bar chart demo"
      // barAriaLabel={(e) =>
      //   `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
      // }
    />
  )
}

export { BarChart }
