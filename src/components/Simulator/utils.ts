import { navigate } from "gatsby"
import { PATH_IDS } from "./constants"
import type { PathId } from "./types"

export const clearUrlParams = (location: Location): void => {
  navigate(location.pathname + location.hash, { replace: true })
}

export const getValidPathId = (pathIdString: string | null): PathId | null => {
  if (!isValidPathId(pathIdString)) return null
  return pathIdString
}

const isValidPathId = (pathIdString: string | null): pathIdString is PathId => {
  return PATH_IDS.includes(pathIdString as PathId)
}

export const getMaxFractionDigitsUsd = (value) => {
  const roundedToCent = Math.round(value * 100) / 100
  const isEvenDollar = roundedToCent % 1 === 0
  return isEvenDollar ? 0 : 2
}
