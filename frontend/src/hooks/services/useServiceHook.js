import { useState } from 'react'

import { getService } from '../../core/helpers/service.helper';

import useServiceHookOnClick from '../../hooks/services/useServiceHookOnClick'
import useServiceAutoSelectHook from '../../hooks/services/useServiceAutoSelectHook'

export default function useServiceHook() {
  const [service, setService] = useState(() => getService(1))

    useServiceAutoSelectHook(setService);
    // By default we'll set it as the first service
    const [selectServiceOnChange, selectServiceOnClick] = useServiceHookOnClick(setService)

  return [service, setService, selectServiceOnChange, selectServiceOnClick]
}
