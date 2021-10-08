import { useCallback } from 'react'

import { getService } from '../../core/helpers/service.helper';

export default function useSelectServiceHook(setService) {

  const selectServiceOnChange = useCallback(event => {
      if (event.target.value)
        setService(getService(parseInt(event.target.value)))
    },
    [setService],
  )

  const selectServiceOnClick = useCallback(serviceId => {
      if (serviceId) setService(getService(parseInt(serviceId)))
    },
    [setService],
  )

  return [selectServiceOnChange, selectServiceOnClick]
}
