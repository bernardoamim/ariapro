import { type NextPage } from 'next'
import InfoIcon from '../../../public/assets/icons/info-icon.svg'
import { sectorsData } from '~/components/charts/constants'

const Employees: NextPage = () => {
  return (
    <article className="flex h-auto w-full flex-col">
      <section className="flex w-full gap-8 p-8">
        <div className="flex w-full flex-col">
          <div className="mb-6 flex flex-row items-center text-gray-950">
            <h1 className="mr-1 text-2xl">Colaboradores</h1>
            <InfoIcon width={24} height={24} strokeWidth={1.5} />
          </div>
          <div className="max-h-80 w-full overflow-hidden overflow-y-scroll rounded-lg border border-solid border-[#95AAC94D]">
            <table className="w-full">
              <thead className="bg-[#EEEFFB]">
                <tr>
                  <th className="p-4 first:text-start">Setores</th>
                  <th className="p-4 first:text-start">
                    Leitos ocupados / Total
                  </th>
                  <th className="p-4 first:text-start">Ocupação / Ideal (%)</th>
                  <th className="p-4 first:text-start">
                    Nº Colaboradores / Ideal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {sectorsData.map((sectorData) => (
                  <tr key={sectorData.name}>
                    <td className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start">
                      {sectorData.name}
                    </td>

                    <td
                      key="Leitos Ocupados/Total"
                      className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                    >
                      {`${sectorData.numberOfBedsOccupied} / ${sectorData.numberOfBeds}`}
                    </td>

                    <td
                      key="Ocupação/Ideal (%)"
                      className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                    >
                      {Number(sectorData.occupation * 100).toFixed()} /&nbsp;
                      {sectorData.idealOccupation}%
                    </td>

                    <td
                      key="Nº Colaboradores/Ideal"
                      className="last-of-type:border-b-none border-b border-solid border-[#95AAC94D] p-4 text-center first:text-start"
                    >
                      {`${sectorData.numberOfEmployees} / ${sectorData.idealNumberOfEmployees}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </article>
  )
}

export { Employees, Employees as default }
