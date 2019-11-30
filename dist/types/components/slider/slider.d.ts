export declare class Slider {
    el: HTMLElement;
    showStatus: boolean;
    currentSlideNumber: number;
    private slidesCount;
    private slides;
    private sliderList;
    private slideWidth;
    private controls;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    slide(amount?: number): void;
    updateControls(): void;
    switchControl(type: string, enabled: boolean): void;
    render(): any;
}
