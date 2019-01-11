# Answers

1.  What is React JS and what problems does it try and solve?

        ReactJS is a User Interface Component Library that renders UI. It lets the developer create complicated UIs from smaller individual pieces of code called components.
        It makes rendering UI more efficient because it uses a virtual DOM, that compares and only updates the DOM when things (components) actually change, rather than re-rendering the DOM constantly.

1.  What does it mean to _think_ in react?

        "Thinking in react" is the process of thinking about how apps are constructed as you build them. For instance breaking down the individual pieces of a rendered UI app into individual sections/components or subcomponents
        that would be coded together to make the application more efficient.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

        Stateful components normally contain data, and therefore are involved with how the app works by providing the rest of the components with the data through callbacks and other functions.
        (Stateful components can contain presentational and container components but don't normally have any styling.)
        Presentational components should focus primarily on the looks/style of the app and they receive the data from the Stateful components by props.

1.  Describe state.

        State is simply data that components store and then pass to other components.

1.  Describe props.

        Props is the data that is received by a component and can be passed around from component to component.
