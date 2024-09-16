import type { ComfyWorkflowJSON } from '@/types/comfyWorkflow'

export const defaultGraph: ComfyWorkflowJSON = {
  last_node_id: 11,
  last_link_id: 8,
  nodes: [
    {
      id: 10,
      type: 'OutputStringToStdout',
      pos: [828, 321],
      size: [315, 58],
      flags: {},
      order: 1,
      mode: 0,
      inputs: [
        {
          name: 'value',
          type: 'STRING',
          link: 8,
          widget: {
            name: 'value'
          }
        }
      ],
      properties: {
        'Node name for S&R': 'OutputStringToStdout'
      },
      widgets_values: ['']
    },
    {
      id: 11,
      type: 'TextInputNode',
      pos: [314, 320],
      size: {
        '0': 400,
        '1': 200
      },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        {
          name: 'text',
          type: 'STRING',
          links: [8],
          shape: 3,
          slot_index: 0
        }
      ],
      properties: {
        'Node name for S&R': 'TextInputNode'
      },
      widgets_values: ['Hello World!']
    }
  ],
  links: [[8, 11, 0, 10, 0, 'STRING']],
  groups: [],
  config: {},
  extra: {
    ds: {
      scale: 1.2100000000000002,
      offset: [13.424462809917515, 7.753801652892307]
    }
  },
  version: 0.4
}
