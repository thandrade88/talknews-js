import NewsBanner from "@/components/NewsBanner";

export default function SectionPage({ params }: { params: { locale: string } }) {


  return (
    <main>
      <div className="container mx-auto">
        <NewsBanner />
      </div>


      {/* 3col 2rows */}
      <div className="container mx-auto">
        <section className="p-4">
          <h2 className="text-lg font-semibold mb-2">Título</h2>

          <div className="grid grid-cols-3 gap-4">
            {["1col", "2col", "3col", "4col", "5col", "6col"].map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-green-200 rounded-lg"
              >
                {label}
              </div>
            ))}
          </div>

        </section>
      </div >

      {/* 4col 1row */}
      <div className="container mx-auto">
        <section className="p-4">
          <h2 className="text-lg font-semibold mb-2">Título</h2>

          <div className="grid grid-cols-4 gap-4">
            {["1col", "2col", "3col", "4col"].map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-green-200 rounded-lg"
              >
                {label}
              </div>
            ))}
          </div>

        </section>
      </div >

      {/* 3cols */}
      < div className="container mx-auto" >
        <section className="grid grid-cols-3 gap-4 p-4">
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-2">Título</h2>
            <div className="items-center justify-center bg-green-200 rounded-lg w-full mb-4">1</div>
            <div className="items-center justify-center bg-green-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-green-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-green-200 rounded-lg w-full mb-4">2</div>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-2">Título</h2>
            <div className="items-center justify-center bg-blue-200 rounded-lg w-full mb-4">1</div>
            <div className="items-center justify-center bg-blue-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-blue-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-blue-200 rounded-lg w-full mb-4">2</div>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-2">Título</h2>
            <div className="items-center justify-center bg-red-200 rounded-lg w-full mb-4">1</div>
            <div className="items-center justify-center bg-red-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-red-200 rounded-lg w-full mb-4">2</div>
            <div className="items-center justify-center bg-red-200 rounded-lg w-full mb-4">2</div>
          </div>

        </section>
      </div >

      {/* 2cols (2 col 1 row) */}
      <div className="container mx-auto">
        <section className="p-4">
          <div className={`grid grid-cols-2 gap-4`}>
            {/* COL 1 */}
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-2">Título</h2>
              <div className="grid grid-cols-2 gap-4">
                {["1col", "2col"].map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-green-200 rounded-lg"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-2">Título</h2>
              <div className="grid grid-cols-2 gap-4">
                {["1col", "2col"].map((label, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-green-200 rounded-lg"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div >

      {/* 4col 1row */}
      <div className="container mx-auto">
        <section className="p-4">
          <h2 className="text-lg font-semibold mb-2">Título</h2>

          <div className="grid grid-cols-4 gap-4">
            {["1col", "2col", "3col", "4col"].map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-green-200 rounded-lg"
              >
                {label}
              </div>
            ))}
          </div>

        </section>
      </div>

    </main >
  );
}

