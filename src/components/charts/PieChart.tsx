import dynamic from 'next/dynamic'
// import { ResponsivePie } from '@nivo/pie'

const ResponsivePie = dynamic(
  () => import('@nivo/pie').then((mod) => mod.ResponsivePie),
  { ssr: false },
)

export type IChartDataProps = {
  id: string
  label: string
  color: string
  value: number
}

interface IPieChartProps {
  data: IChartDataProps[]
  className?: string
}

function PieChart({ data }: IPieChartProps) {
  // const colors = data.map((section) => section.color)

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      innerRadius={0.8}
      padAngle={4}
      cornerRadius={0}
      activeOuterRadiusOffset={5}
      borderWidth={0}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      animate
      // borderColor={{
      //   from: 'color',
      //   modifiers: [['darker', 0.2]],
      // }}
      // arcLinkLabelsSkipAngle={10}
      // arcLinkLabelsTextColor="#333333"
      // arcLinkLabelsThickness={2}
      // arcLinkLabelsColor={{ from: 'color' }}
      // arcLabelsSkipAngle={10}
      startAngle={0}
      endAngle={360}
      colors={{ datum: 'data.color' }}
      motionConfig="wobbly"
      // arcLabelsTextColor={{
      //   from: 'color',
      //   modifiers: [['darker', 2]],
      // }}
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: 'rgba(255, 255, 255, 0.3)',
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: 'rgba(255, 255, 255, 0.3)',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'ruby',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'c',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'go',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'python',
      //     },
      //     id: 'dots',
      //   },
      //   {
      //     match: {
      //       id: 'scala',
      //     },
      //     id: 'lines',
      //   },
      //   {
      //     match: {
      //       id: 'lisp',
      //     },
      //     id: 'lines',
      //   },
      //   {
      //     match: {
      //       id: 'elixir',
      //     },
      //     id: 'lines',
      //   },
      //   {
      //     match: {
      //       id: 'javascript',
      //     },
      //     id: 'lines',
      //   },
      // ]}
      // legends={[
      //   {
      //     anchor: 'bottom',
      //     direction: 'row',
      //     justify: false,
      //     translateX: 0,
      //     translateY: 56,
      //     itemsSpacing: 0,
      //     itemWidth: 100,
      //     itemHeight: 18,
      //     itemTextColor: '#999',
      //     itemDirection: 'left-to-right',
      //     itemOpacity: 1,
      //     symbolSize: 18,
      //     symbolShape: 'circle',
      //     effects: [
      //       {
      //         on: 'hover',
      //         style: {
      //           itemTextColor: '#000',
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  )
}

export { PieChart }
