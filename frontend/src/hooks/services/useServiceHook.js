import { useState } from 'react'

import { getService } from '../../core/helpers/service.helper';

import useSelectServiceHook from '../../hooks/services/useSelectServiceHook'
import useServiceAutoSelectHook from '../../hooks/services/useServiceAutoSelectHook'

export default function useServiceHook() {

  const [service, setService] = useState(() => getService(1))

  useServiceAutoSelectHook(setService);

  const [selectServiceOnChange, selectServiceOnClick] = useSelectServiceHook(setService)

  return [service, setService, selectServiceOnChange, selectServiceOnClick]
}
