import { useQuery } from "@tanstack/react-query";
import { getLoginInfoAPI } from "../api";
import { useGuestModeStore } from "@/shared/stores";
import { isSuccessResponse } from "@/shared/lib";

const useLoginInfo = () => {
  const isGuestMode = useGuestModeStore(state => state.isGuestMode);

  const {data: response, ...rest} = useQuery({
    queryKey: ["user-info"],
    queryFn: () => getLoginInfoAPI(),
    staleTime: Infinity,
    enabled: !isGuestMode,
  });

  const userInfo = response && isSuccessResponse(response) ? response.data : null;
  const hasError = response && !isSuccessResponse(response);

  return {
    ...rest,
    data: userInfo,
    userInfo: userInfo,
    hasError,
    apiError: hasError ? response.message : null,
  }
}

export default useLoginInfo;