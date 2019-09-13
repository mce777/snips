<Container
  padding={{
    top: {
      [Breakpoints.default]: ContainerPadding.static200,
        [Breakpoints.b560]: ContainerPadding.static300,
        [Breakpoints.b1600]: ContainerPadding.static350
    },
    bottom: {
      [Breakpoints.default]: ContainerPadding.static200,
        [Breakpoints.b560]: ContainerPadding.static300,
        [Breakpoints.b1600]: ContainerPadding.static350
    },
    left: {
      [Breakpoints.default]: ContainerPadding.static370,
        [Breakpoints.b560]: ContainerPadding.static515,
        [Breakpoints.b1600]: ContainerPadding.static530
    },
    right: {
      [Breakpoints.default]: ContainerPadding.static370,
        [Breakpoints.b560]: ContainerPadding.static515,
        [Breakpoints.b1600]: ContainerPadding.static530
    }
  }}
>
  {contents}
</Container>
