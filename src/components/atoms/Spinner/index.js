import { h } from 'preact';
import './index.scss';

const Spinner = () => (
    <div class="aSpinner" data-testid="aSpinner-test">
        <div class="aSpinner__child"/>
        <div class="aSpinner__child"/>
        <div class="aSpinner__child"/>
        <div class="aSpinner__child"/>
    </div>
);

export default Spinner;
