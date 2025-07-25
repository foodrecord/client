// lib/simple-toast.ts - 더 간단한 버전을 원한다면
import { toast } from "sonner";

const customToast = {
  success: (message: string) => {
    toast.custom((id) => (
      <div className="relative bg-green-50 border border-green-200 rounded-lg p-4 pr-12 max-w-md shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
          <div>
            <p className="text-sm text-green-700 mt-1">{message}</p>
          </div>
        </div>
        <button
          onClick={() => toast.dismiss(id)}
          className="absolute top-3 right-3 text-green-400 hover:text-green-600"
        >
          ✕
        </button>
      </div>
    ));
  },

  error: (message: string) => {
    toast.custom((id) => (
      <div className="relative bg-red-50 border border-red-200 rounded-lg p-4 pr-12 max-w-md shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            !
          </div>
          <div>
            <p className="text-sm text-red-700 mt-1">{message}</p>
          </div>
        </div>
        <button
          onClick={() => toast.dismiss(id)}
          className="absolute top-3 right-3 text-red-400 hover:text-red-600"
        >
          ✕
        </button>
      </div>
    ));
  },

  // 로딩만 처리하는 함수
  loading: (message: string) => {
    return toast.custom(() => (
      <div className="relative bg-blue-50 border border-blue-200 rounded-lg p-4 pr-12 max-w-md shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div>
            <p className="text-sm text-blue-700 mt-1">{message}</p>
          </div>
        </div>
      </div>
    ));
  },
};

export default customToast;
