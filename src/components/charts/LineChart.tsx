import dynamic from 'next/dynamic'

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then((mod) => mod.ResponsiveLine),
  { ssr: false },
)

interface ILineChartDataProps {
  id: string
  color?: string
  data: Array<{ x: string; y: number }>
}

interface ILineChartProps {
  data: ILineChartDataProps[]
}

function LineChart({ data }: ILineChartProps) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'transportation',
        // legendOffset: 36,
        // legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: 'count',
        // legendOffset: -40,
        // legendPosition: 'middle',
      }}
      pointSize={6}
      pointColor={{ from: 'color' }}
      pointBorderWidth={0}
      // pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      curve="natural"
      colors={{ datum: 'color' }}
      lineWidth={2}
      useMesh={true}
      // legends={[
      //   {
      //     anchor: 'bottom-right',
      //     direction: 'column',
      //     justify: false,
      //     translateX: 100,
      //     translateY: 0,
      //     itemsSpacing: 0,
      //     itemDirection: 'left-to-right',
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemOpacity: 0.75,
      //     symbolSize: 12,
      //     symbolShape: 'circle',
      //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
      //     effects: [
      //       {
      //         on: 'hover',
      //         style: {
      //           itemBackground: 'rgba(0, 0, 0, .03)',
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  )
}

export { LineChart }
