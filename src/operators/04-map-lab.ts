import {fromEvent} from "rxjs";
import {map, tap} from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae tortor sed quam placerat suscipit. Curabitur id mi convallis, cursus libero eget, accumsan velit. Nullam varius lacinia purus non egestas. Sed dolor odio, rutrum fringilla ultricies ut, scelerisque sed mi. Morbi sit amet mollis dui. Nullam ut orci eu lectus sodales elementum non a magna. Sed scelerisque interdum lorem at pharetra. Morbi sit amet turpis eu nunc pharetra vulputate at vitae sem. Maecenas nulla nisl, dictum sed gravida a, luctus blandit arcu. Sed efficitur scelerisque tempor.
<br/><br/>
Fusce dictum diam arcu, varius suscipit risus volutpat vel. Donec et auctor orci, eu imperdiet turpis. Donec sagittis facilisis turpis, vitae volutpat purus ultricies non. Nulla lobortis nunc nec erat rhoncus, eu interdum risus placerat. Integer semper vehicula dolor, vel maximus massa ultrices sed. Integer ex est, fermentum vitae fringilla ut, finibus a ante. Donec in ultricies dolor, porta vehicula ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus convallis libero at massa maximus, eu posuere erat blandit. Nunc vitae egestas sapien. Aliquam erat volutpat. Integer pretium iaculis neque a pellentesque. Aenean malesuada interdum facilisis.
<br/><br/>
Nunc tempus leo massa, vitae interdum velit hendrerit vel. Pellentesque porttitor at diam eget auctor. Nam sed erat hendrerit, euismod tellus eget, consequat neque. Curabitur egestas elementum leo, vestibulum imperdiet odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas auctor mollis finibus. Morbi pretium in diam in venenatis. Nulla vitae vestibulum elit, a consequat urna.
<br/><br/>
Phasellus ut leo et ex tincidunt pellentesque. Phasellus volutpat congue gravida. Proin convallis auctor dignissim. Proin elementum ullamcorper magna in pellentesque. Vestibulum non urna facilisis erat gravida euismod et et justo. Vivamus in laoreet turpis, sollicitudin molestie odio. Nullam in tempor neque.
<br/><br/>
Quisque malesuada odio sed diam aliquet, eu elementum magna ullamcorper. Suspendisse semper orci non posuere pellentesque. Duis non varius leo, nec elementum quam. Curabitur pulvinar sem sed eros egestas volutpat id in odio. Aenean nec tincidunt magna, nec mattis sem. Nam faucibus ut lorem volutpat sollicitudin. Suspendisse est ligula, tempus quis vulputate eu, mattis at nibh. Quisque pretium vel mauris at molestie. Quisque tellus mi, placerat at risus nec, accumsan varius purus. Suspendisse bibendum at tellus eu ornare.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularProcentaje = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent<Event>(document, 'scroll');

const progress$ = scroll$
    .pipe(
        //map(event => calcularProcentaje(event))
        map(calcularProcentaje)
    )

progress$.subscribe(procentaje => {
    progressBar.style.width = `${procentaje}%`;
})