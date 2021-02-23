import React from 'react'
import { Circle, Layer, Rect, Stage } from 'react-konva'
import { CanvaScreen, Content, Content2 } from './styles/CanvasScreen'

const CanvasScreen: React.FC = () => {
  return (
    <>
      <CanvaScreen>
        <Content>
          <Content2>
            <Stage role="presentation" width={1080} height={1350}>
              <Layer>
                <Rect
                  x={200}
                  y={200}
                  width={50}
                  height={50}
                  fill="red"
                  draggable={true}
                />
                <Circle
                  x={200}
                  y={200}
                  stroke="black"
                  radius={50}
                  draggable={true}
                />
              </Layer>
            </Stage>
          </Content2>
        </Content>
      </CanvaScreen>
    </>
  )
}

export default CanvasScreen
