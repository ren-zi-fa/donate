import { Card, CardDescription, CardTitle } from "../ui/card";
import imagecourse from "@/assets/courses-1.jpg";
import imagecourse2 from "@/assets/courses-2.jpg";
import imagecourse3 from "@/assets/courses-3.jpg";

export default function CausesHome() {
  return (
    <div className=" w-fit mx-auto bg-gray-300 mt-4 p-8 h-fit">
      <h1 className="text-center p-1 text-orange-500 font-normal border-2 bg-white rounded-2xl w-fit mx-auto">
        Feature Causes
      </h1>
      <h2 className="text-center font-bold text-2xl md:text-4xl my-4">
        Setiap Anak Berhak <br /> Mendapatkan <br /> Kesempatan untuk Belajar
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 ">
        <Card className=" py-0 border-y-4 border-orange-600 px-8 mx-auto">
          <CardTitle className="mx-auto text-white py-2 px-4 rounded-sm bg-orange-500 w-fit">
            Pendidikan
          </CardTitle>
          <h1 className="text-center font-bold text-xl">
            Pendidikan Untuk Anak <br /> Kurang Mampu
          </h1>
          <CardDescription className="text-center">
            Donasi ini dikhususkan untuk memberikan <br /> akses pendidikan bagi
            anak-anak kurang mampu, membantu mereka meraih peluang yang lebih
            baik di masa depan
          </CardDescription>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="text-xs">Rp 10,000Goal -</div>
              <div className="text-xs">Rp 9,000,000 Raised</div>
            </div>
            <div className="w-full bg-gray-200 rounded-lg">
              <div className="bg-orange-500 h-3 rounded-lg w-[90%]"></div>
            </div>
          </div>
          <img
            src={imagecourse}
            alt="pendidikan"
            className="mb-4 w-[400px] mx-auto"
          />
        </Card>
        <Card className=" py-0 border-y-4 border-orange-600 px-8  mx-auto ">
          <CardTitle className="mx-auto text-white py-2 px-4 rounded-sm bg-orange-500 w-fit">
            Air Bersih
          </CardTitle>
          <h1 className="text-center font-bold text-xl">
            Mengatasi Krisis Air Bersih
          </h1>
          <CardDescription className="text-center">
            Donasi Anda menyediakan akses air bersih dan sanitasi layak bagi
            masyarakat terdampak
          </CardDescription>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="text-xs">Rp 10,000 Goal -</div>
              <div className="text-xs">Rp 9,000,000 Raised</div>
            </div>
            <div className="w-full bg-gray-200 rounded-lg">
              <div className="bg-orange-500 h-3 rounded-lg w-[90%]"></div>
            </div>
          </div>
          <img src={imagecourse2} alt="pendidikan" className="mb-4" />
        </Card>
        <Card className=" py-0 border-y-4 border-orange-600 px-8  mx-auto">
          <CardTitle className="mx-auto text-white py-2 px-4 rounded-sm bg-orange-500 w-fit">
            Kehidupan yang sehat
          </CardTitle>
          <h1 className="text-center font-bold text-xl">
            Bantu Wujudkan Akses Pengobatan
          </h1>
          <CardDescription className="text-center">
            Donasi Anda memberikan akses pengobatan dan perawatan kesehatan bagi
            mereka yang membutuhkan
          </CardDescription>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="text-xs">Rp 10,000 Goal -</div>
              <div className="text-xs">Rp 9,000,000 Raised</div>
            </div>
            <div className="w-full bg-gray-200 rounded-lg">
              <div className="bg-orange-500 h-3 rounded-lg w-[90%]"></div>
            </div>
          </div>
          <img src={imagecourse3} alt="pendidikan" className="mb-4" />
        </Card>
      </div>
    </div>
  );
}
