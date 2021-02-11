import React, { useState } from "react";

import {Carousel} from "react-bootstrap";

import ForecastTile from "./ForecastTile";

interface ForecastCarouselProps {
    weather: Record<any, any>,
    pollution: Record<any, any>
}

export default function ForecastCarousel(props: ForecastCarouselProps) {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex:any, e:any) => {
        setIndex(selectedIndex);
    };

    return (
            <Carousel
                controls={true}
                indicators={false}
            >
                {
                    props.pollution.data.forecast.daily.pm10.slice(0, 5).map((pm10pollution: number, index: number) => (
                        <Carousel.Item>
                            <ForecastTile
                                pm10={pm10pollution}
                                pm25={props.pollution.data.forecast.daily.pm25[index]}
                                forecast={props.weather.daily[index + 1]}
                                key={`forecastCarouselTile${index}`}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
    )
}
