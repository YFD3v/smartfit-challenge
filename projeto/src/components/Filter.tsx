import Button from "./Button";

const Filter = () => {
  return (
    <div className="px-5">
      <div className="rounded-lg border-solid border-2 border-brand-lightGrey p-5 border-opacity-75">
        <div className="flex items-center gap-2">
          <img width={28} src="/icon-hour.png" alt="Icone Horário" />
          <p className="text-brand-lightGrey">Horário</p>
        </div>

        <h2 className="text-3xl text-brand-lightGrey mt-5 pb-4 border0b border-solid border-brand-lightGrey border-opacity-35">
          Qual período quer treinar?
        </h2>

        <div className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                name="period"
                value="morning"
                id="morning"
                className="w-4"
              />
              <label htmlFor="morning" className="text-brand-lightGrey">
                Manhã
              </label>
            </div>
            <p>6:00 às 12:00</p>
          </div>
          <div className="flex justify-between border- y border-solid border-brand-lightGrey py-3 border-opacity-35">
            <div className="flex gap-2">
              <input
                type="radio"
                name="period"
                value="afternoon"
                id="afternoon"
                className="w-4"
              />
              <label htmlFor="afternoon" className="text-brand-lightGrey">
                Tarde
              </label>
            </div>
            <p>12:01 às 18:00</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                name="period"
                value="evening"
                id="evening"
                className="w-4"
              />
              <label htmlFor="evening" className="text-brand-lightGrey">
                Noite
              </label>
            </div>
            <p>18:01 às 23:00</p>
          </div>
        </div>

        <div className="flex flex-col item-center gap-2 mt-5">
          <div className="flex item-center gap-2 ">
            <input
              type="checkbox"
              name="showCloseUnites"
              id="showCloseUnits"
              className="w-4 h-4"
            />
            <label htmlFor="showCloseUnits" className="text-black">
              Exibir unidades próximas
            </label>
          </div>
          <h3>
            Resultados encontrados:
            <span color="font-semibold text-xl">0</span>
          </h3>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Button variant="primary">Encontrar unidade</Button>
          <Button variant="outlined">Limpar</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
