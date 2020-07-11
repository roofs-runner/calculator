import { renderHook, cleanup, RenderHookResult, act } from '@testing-library/react-hooks'
import { useCalculatorState } from './use-calculator-state'
import { defaultInputsMock } from '../__mocks__/calculator'

describe('useCalculatorState', () => {
  let hook: RenderHookResult<any, any>

  afterAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  describe('hook', () => {
    beforeEach(() => {
      hook = renderHook(() => {
        return useCalculatorState()
      })
    })

    it('sets mode to base', () => {
      expect(hook.result.current.calculatorMode.mode).toBe('base')
      expect(hook.result.current.inputsState.inputs).toEqual(defaultInputsMock)
    })

    describe('handleModeChange', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current.handleModeChange('custom1')
          hook.rerender()
        })
      })

      it('changes mode to custom1', () => {
        expect(hook.result.current.calculatorMode.mode).toBe('custom1')
      })
    })

    describe('handleInputsChange', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current.handleInputsChange(
            {
              target: {
                dataset: {
                  id: 'valueA',
                },
              },
            } as any,
            'valueA'
          )
          hook.rerender()
        })
      })

      it('changes mode to custom1', () => {
        expect(hook.result.current.inputsState.inputs.valueA).toBe(true)
      })
    })

    describe('handleInputsNumberChange', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current.handleInputsNumberChange(
            {
              target: {
                value: '34',
              },
            } as any,
            'valueE'
          )
          hook.rerender()
        })
      })

      it('changes the value of the field valueE', () => {
        expect(hook.result.current.inputsState.inputs.valueE).toEqual('34')
      })
    })

    describe('onFloatFieldChange', () => {
      beforeEach(() => {
        act(() => {
          hook.result.current.onFloatFieldChange({
            target: {
              value: '33333',
            },
          } as any)
          hook.rerender()
        })
      })

      it('changes the value of the field valueD', () => {
        expect(hook.result.current.inputsState.inputs.valueD).toEqual('33.333')
      })
    })
  })
})
